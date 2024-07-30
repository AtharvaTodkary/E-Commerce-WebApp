const Category = require("../models/categoryModels");

const categoryCtrl ={
    //affects GET route of category
    getCategories: async(req,res)=>{
        try {
            //get every entry from mongodb
            const categories = await Category.find()
            res.json(categories);
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },//affects POST route of category
    createCategory: async(req,res)=>{
        try {
            const {name} = req.body;
            const category = await Category.findOne({name})
            
            if(category) return res.status(400).json({msg:"Category Already Exists"});
            
            const newCategory = new Category({name});
            
            await newCategory.save();
            res.json({msg:'Created a Category'})

        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },//affects DELETE route of category
    deleteCategory: async(req,res)=>{
        try {
            //FindByIdAndDelete will do is delete the category from the given id
            await Category.findByIdAndDelete(req.params.id)
            res.json({msg:"Deleted a Category"})
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },//affects PUT route of category
    updateCategory: async(req,res)=>{
        try {
            const {name} = req.body;
            //FindByIdAndUpdate do is finds by given id and updaes the category name
            await Category.findByIdAndUpdate({_id:req.params.id},{name});
            res.json({msg:"Updated"})

        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    }
}

module.exports = categoryCtrl;