import express from "express";
import {addMCQS, addSingleQuestion, getQuestionsByTopic} from "../../controllers/question/controller.js";

const questionRouter = express.Router();

questionRouter.post('/add', addMCQS);
questionRouter.post('/add/single', addSingleQuestion);
questionRouter.get('/get', getQuestionsByTopic);

export default questionRouter;
