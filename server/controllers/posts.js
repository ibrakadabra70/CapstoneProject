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

export default router;