import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import postRoute from './routes/postRoute.js'
import aiRoute from './routes/aiRoute.js'


import connectDB from './mongodb/db.js';


dotenv.config();
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json({limit: '50mb' }))

app.use('/api/v1/post',postRoute);
app.use('/api/v1/ai',aiRoute);



app.get('/', async(req,res)=>{
    res.send('Hello from backend');
})


app.listen(PORT,()=>{
    try {
        connectDB(process.env.MONGODB_URL)
        console.log(`server running on ${3000}`);
    } catch (error) {
        console.log(err);
    }
})

