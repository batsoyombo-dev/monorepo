import { PrismaClient } from "@monorepo/database";
import { Application, Request, Response } from "express";

export default async function defineRoutes(expressApp: Application) {
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany();
    expressApp.get("/", function (_req: Request, res: Response) {
        return res.json({
            data: users,
        });
    });
}
