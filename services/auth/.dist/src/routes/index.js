"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("@monorepo/database");
async function defineRoutes(expressApp) {
    const prisma = new database_1.PrismaClient();
    const users = await prisma.user.findMany();
    expressApp.get("/", function (_req, res) {
        return res.json({
            data: users,
        });
    });
}
exports.default = defineRoutes;
