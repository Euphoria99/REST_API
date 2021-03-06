const express = require('express');

const router = express.Router();

const Post = require('../models/posts');

//GETs all the post 
router.get('/', async  (req, res) => {
  try{
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({message: err});
  }
})

//submits a post
router.post('/' , async (req,res) => {
  const post = new Post({
    name: req.body.name,
    surname: req.body.surname,
    age: req.body.age
  });
  
  try{
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({message: err});
  } 
});

//specific post 

router.get('/:postId' , async (req, res) => {
  try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
  }catch (err) {
    res.json({message: err});
  }
});

//delete a specific
router.delete('/:postId', async (req,res) => {
  try{
    const removedPost = await  Post.remove({_id: req.params.postId});
    res.json(removedPost);
 }catch (err) {
  res.json({message: err});
}
});

//update a post 
router.patch('/:postId', async (req,res) => {
  try{
    const updatedPost = await  Post.updateOne(
    {_id: req.params.postId},
    {$set: {name: req.body.name}}
    );
    res.json(updatedPost);
 }catch (err) {
  res.json({message: err});
}
});

module.exports = router;