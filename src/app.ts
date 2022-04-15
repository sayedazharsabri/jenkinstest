import express from 'express';
import JenkinsRouter from './routes/jenkins';

const app = express();

app.use("/jenkins",JenkinsRouter);

app.get("/",(req, res) => {
    res.status(200).json({status:"success"});
})


export default app;