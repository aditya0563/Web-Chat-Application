import express from "express"
import dotenv from 'dotenv'
import connectDB from "./config/database.js"
import userRoute from "./routes/userRoute.js"
import messageRouter from "./routes/messageRoute.js"
import cookieParser from "cookie-parser"
import cors from 'cors'
import { app, server } from "./socket/socket.js";

dotenv.config({})

// const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cookieParser())
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true
}
app.use(cors(corsOptions))

connectDB()

// routes
app.use("/api/v1/user", userRoute)
app.use("/api/v1/message", messageRouter)

server.listen(PORT, ()=>{
    console.log (`Server is running on ${PORT}`)
})// socket initialized
// cleanup unused imports
