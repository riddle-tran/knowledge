import { loadConfigs } from 'config'
import server from 'server'

const start = async () => {
  const cfgOptions = loadConfigs()
  const svc = server(cfgOptions)

  svc.listen(3000, () => {
    console.log(`app is listening to port 3000`)
  })
}

start()
