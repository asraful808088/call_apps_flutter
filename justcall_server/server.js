import cookieParse from "cookie-parser";
import cors from "cors";
import dotEnv from "dotenv";
import express from "express";
import expressFileUploder from "express-fileupload";
import http from "http";
import mongoose from "mongoose";
import auth from "./routes/auth/main.js";
import socket from "./socket/socket.js";
const app = express();
const server = http.createServer(app);
socket.socketIoInit(server);
dotEnv.config();
const uri = process.env.MONGO_DATABASE_SERVER;
const client = mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Database Connect Successfully");
  })
  .catch((err) => {
    console.log("Database Connect fail ");
  });

const PORT = process.env.PORT;
app.use(cookieParse(process.env.COOKIE_SECRET));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(expressFileUploder({ useTempFiles: true }));
app.use("/", auth);
socket.IO;
server.listen(PORT, (err) => {
  if (err) {
    console.log("server start failed");
    return;
  }
  console.log(`server start success on ${PORT} `);
});
