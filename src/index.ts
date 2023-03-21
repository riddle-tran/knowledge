import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(3000, () => {
  console.log(`app is listening to port 3000`)
})
