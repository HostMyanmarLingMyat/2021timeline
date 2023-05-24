import express from 'express'
import apiRoutes from './routes/api'

const app = express()

app.use(apiRoutes)

const PORT = 8080;
app.listen(PORT, () => console.log(`API 🟢`))