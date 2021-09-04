import * as express from "express";
import * as helmet from "helmet";

require('dotenv').config();

const PORT = process.env.PORT || 9090;
const app = express();

app.use(helmet());

app.get('/', (req, res) => {
    res.json({
        helloTo: 'World'
    })
});

app.listen(PORT, () => {
    console.log(`Server Up! Listening On: http://localhost:${PORT}`);
})
