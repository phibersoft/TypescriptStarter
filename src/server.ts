import express from "express";

const app = express();
const {
    PORT = 4000
} = process.env;

app.get('/', async (req, res) => {
    res.send({
        message: 'Hello World!'
    })
});

app.listen(PORT, () => {
    console.log(`⚡ Server Started at ::${PORT}`);
})

export default app;
