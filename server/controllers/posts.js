import express from 'express';
import mongoose from 'mongoose';

import PostForm from "../models/postForm.js"

const router = express.Router();

export const getForms = async (req, res) => {
    try {
        const postForms =  await PostForm.find();
        
        res.status(200).json(postForms);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const sendForms = async (req, res) => {
    const form = req.body
    const newForm = new PostForm(form);
    try {
        await newForm.save();
        console.log(newForm)
        res.status(201).json(newForm);
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostForm.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export default router;