// src/server/controllers/topic/controller.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const addTopics = async (req, res) => {
    try {
        await prisma.topic.createMany({
            data: [
                { id: "topic_os", name: "Operating System" },
                { id: "topic_dbms", name: "DBMS" },
                { id: "topic_cn", name: "Computer Networks" },
                { id: "topic_ds", name: "Data Structures" }
            ],
            skipDuplicates: true
        });

        res.status(201).json({ message: 'Topics added successfully' });
    } catch (error) {
        console.error('Error adding topics:', error);
        res.status(500).json({ error: 'Failed to add topics' });
    } finally {
        await prisma.$disconnect();
    }
};
