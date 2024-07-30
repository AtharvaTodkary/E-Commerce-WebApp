const router = require('express').Router();
const cloudinary = require('cloudinary').v2;
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');
const fs = require('fs');
const { promisify } = require('util');
const unlinkAsync = promisify(fs.unlink);

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

router.post('/upload', auth, authAdmin, async (req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0)
            return res.status(400).json({ msg: "No files were uploaded" });

        const file = req.files.file;

        // Validate file size
        if (file.size > 1024 * 1024) {
            await removeTmp(file.tempFilePath);
            return res.status(400).json({ msg: "Size too large" });
        }

        // Validate file type
        if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
            await removeTmp(file.tempFilePath);
            return res.status(400).json({ msg: "File format is incorrect" });
        }

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(file.tempFilePath, { folder: 'test' });

        // Remove temporary file
        await removeTmp(file.tempFilePath);

        // Send response
        res.json({ public_id: result.public_id, url: result.secure_url });
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
});

router.post('/destroy', auth, authAdmin, async (req, res) => {
    try {
        const { public_id } = req.body;
        if (!public_id) return res.status(400).json({ msg: "No images selected" });

        // Destroy image on Cloudinary
        await cloudinary.uploader.destroy(public_id);

        // Send response
        res.json({ msg: "Deleted" });
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
});

const removeTmp = async (path) => {
    try {
        await unlinkAsync(path);
    } catch (err) {
        throw err;
    }
}

module.exports = router;
