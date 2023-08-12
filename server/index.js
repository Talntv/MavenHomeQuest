import express from 'express'
import routes from './routes/index.ts'
import mongoose from 'mongoose'

// Connect app with gameLeaderboard db
mongoose.connect('mongodb://0.0.0.0:27017/gameLeaderboard', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', routes)

const PORT = process.env.PORT || 5000
app.listen(PORT)
 