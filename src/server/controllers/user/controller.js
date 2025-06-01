import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).send(users);
    } catch (e) {
        res.status(500).send("An error occured :- ", e);
    }
}

const addUser = async (req, res) => {
    try{
        const {name, email} = req.body;
        const user = await prisma.user.create({
            data: { name, email }
        });
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send("An error occured :- ", e);
    }
}

export {getUsers, addUser};