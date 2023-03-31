import express, { Express } from 'express'
import bodyParser from 'body-parser'
import { AppConfig } from 'config'

const server = (cfgOptions: AppConfig): Express => {
  const app = express()
  app.use(bodyParser.json())
  app.get('/', (req, res) => {
    res.send('Hello')
  })

  return app
}
export default server
