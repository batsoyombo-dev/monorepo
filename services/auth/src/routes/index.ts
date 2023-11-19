import { Application, Request, Response } from "express";

export default function defineRoutes(expressApp: Application) {
    expressApp.get("/", function (_req: Request, res: Response) {
        return res.json({
            name: "dwq",
        });
    });
}
