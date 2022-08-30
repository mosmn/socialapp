//POST routes
import express from 'express';

//import the functions
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

//setup router
const router = express.Router();

//adding a route
router.get('/', getPosts);
router.post('/', createPost);
// patch: for updating existting documents
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;