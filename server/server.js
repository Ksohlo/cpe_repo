import express from 'express';
import cors from "cors"
import dotenv from "dotenv"
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const url = process.env.MONGO_URL

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect(url)
.then(() => {
  console.log("MongoDB connected")
})

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});