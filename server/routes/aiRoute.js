import express from "express";
import dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';
import axios from "axios";
import FormData from 'form-data';
import Post from "../models/post.js";

dotenv.config();


const router = express.Router();

router.route('/').get((req,res)=>{
    res.send("hi from airoute");
});

router.post('/', async (req,res)=>{
    const {prompt} = req.body;
      if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }
    try {
         const form = new FormData();
    form.append('prompt', prompt);

    const response = await axios.post(
        'https://clipdrop-api.co/text-to-image/v1',
        form,
        {
            headers:{
                ...form.getHeaders(),
                'x-api-key': process.env.CLIPDROP_API_KEY, 
            },
            responseType: 'arraybuffer'
        }
    );
    const remainingCredits = response.headers['x-remaining-credits'];
    const creditsUsed = response.headers['x-credits-consumed'];

    const base64Image = Buffer.from(response.data).toString('base64');
    res.status(200).json({ photo: base64Image,
        remainingCredits,
        creditsUsed
     });

    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response.data.error.message || "Something went wrong");
    }
})




export default router;