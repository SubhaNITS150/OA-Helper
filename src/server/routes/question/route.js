import express from "express";
import addMCQS from "../../controllers/question/controller.js";

const questionRouter = express.Router();

questionRouter.post('/add', addMCQS);

export default questionRouter;
