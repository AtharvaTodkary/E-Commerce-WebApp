const router = require('express').Router();
const categoryCtrl = require('../controllers/categoryCtrl');
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');


//category routes for adding, deleting and updating categories

router.route('/category')
.get(categoryCtrl.getCategories) //GET route is for getting every category
.post(auth,authAdmin,categoryCtrl.createCategory); //POST route is for creating a category [ONLY ADMIN CAN DO THAT]

router.route('/category/:id') //we need id of the category for the operations
.delete(auth,authAdmin,categoryCtrl.deleteCategory) //DELETE route is for deletion of a category
.put(auth,authAdmin,categoryCtrl.updateCategory); //PUT route is for updating a category

module.exports = router;