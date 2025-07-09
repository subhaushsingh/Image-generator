import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json({limit: '50mb' }))


app.get('/', async(req,res)=>{
    res.send('Hello from backend');
})


app.listen(PORT,()=>{
    console.log(`server running on ${3000}`);
})