import express from 'express';
import {addTopics} from "../../controllers/topics/controller.js";

const topicsRouter = express.Router();

topicsRouter.post('/add', addTopics);

export default topicsRouter;