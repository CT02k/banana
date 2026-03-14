import express from "express";

const app = express();

app.use(express.json());

app.get("/health", async (_req, res) => {
    const receivedDate = new Date().getMilliseconds();

    res.status(200).json({
        ok: true,
        ping: `${new Date().getMilliseconds() - receivedDate}ms`
    });    
});

export default app;