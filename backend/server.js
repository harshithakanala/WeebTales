import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import blogRouter from './routes/blogRoute.js'
import emailRouter from './routes/emailRoute.js'


// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())

app.use(cors());


// api endpoints
app.use('/api/user',userRouter)
app.use('/api/blog',blogRouter)
app.use('/api/email',emailRouter)


app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=> console.log('Server started on PORT : '+ port))