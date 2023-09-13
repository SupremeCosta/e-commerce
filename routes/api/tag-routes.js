const router = require('express').Router();
const { Tag, Product, ProductTag} = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  const Tags = await Tag.findAll({
    include : Product
  }) 
  // be sure to include its associated Product data
  return res.status(200).send(Tags);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  const SingleTag = await Tag.findOne({
    where : { id : req.params.id},
    include : Product
  })
  return res.status(200).send(SingleTag);
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  const NewTag = {
    tag_name : req.body.tag_name
  }
  const CreatedTag = await Tag.create(NewTag);

  return res.status(200).send(CreatedTag);
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const NewTag = {
    tag_name : req.body.tag_name
  }
  const UpdatedTag = await Tag.update(NewTag, {
    where : { id : req.params.id }
  }) 
  return res.status(200).send(UpdatedTag);
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const DeletedTag = await Tag.destroy({
      where : { id : req.params.id }
    }
  )
  return res.status(200).send(DeletedTag.toString())
});

module.exports = router;