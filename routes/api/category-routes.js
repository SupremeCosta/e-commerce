const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const Categories = await Category.findAll({include:Product});

  return res.status(200).send(Categories)
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  console.log(req.params.id)
  // find one category by its `id` value
  const IDCategory = await Category.findOne({
    where : { id : req.params.id},
    include : Product
  })
  return res.status(200).send(IDCategory)
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  console.log(req.body.category_name)
  // create a new category
  const newCategory = {
    "category_name": req.body.category_name
  }
  const NewCategory = await Category.create(newCategory); 

  return res.status(200).send(NewCategory);
});

router.put('/:id', async (req, res) => {
  const UpdateCategory = {
    category_name : req.body.category_name
  }
  // update a category by its `id` value
  const UpdatedCategory = await Category.update(UpdateCategory,{
    where : { id: req.params.id }
  }) 
  return res.status(200).send(UpdatedCategory)
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const DeletedCategory = await Category.destroy({
    where : { id: req.params.id}
  })

  return res.status(200).send(DeletedCategory.toString());
});

module.exports = router;