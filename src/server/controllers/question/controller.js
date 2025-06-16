import {PrismaClient} from "@prisma/client"
import mcqs from "../../../constants/questions.js"
const prisma = new PrismaClient();

const addMCQS = async(req, res) => {
    try{
        const createdMCQs = await prisma.mCQ.createMany({
            data: mcqs,
            skipDuplicates: true
        });

        console.log(` MCQs inserted successfully.`);
    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}

addMCQS();

export default addMCQS;