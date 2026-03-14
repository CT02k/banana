import express from "express";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());

app.get("/health", async (_req, res) => {
    const receivedDate = new Date().getMilliseconds();

    res.status(200).json({
        ok: true,
        ping: `${new Date().getMilliseconds() - receivedDate}ms`
    });    
});

app.use(errorHandler);

export default app;