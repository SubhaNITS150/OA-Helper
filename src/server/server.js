import express from 'express';
import dotenv from 'dotenv';
// import {router} from "next/client.js";
import userRouter from "../server/routes/user/route.js"
import questionRouter from "../server/routes/question/route.js"
import topicRouter from "../server/routes/topics/route.js"
import cors from "cors"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(cors());

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    try {
        res.status(200).send('Hello World!');
    } catch(e){
        res.status(500).send({message : "Something went wrong"});
    }
})

app.use('/api/user', userRouter);
app.use('/api/mcq', questionRouter);
app.use('/api/topics', topicRouter);

app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
})