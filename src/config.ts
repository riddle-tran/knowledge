import dotenv from 'dotenv'

dotenv.config()

interface ServerConf {
  address: string
  timeout: number
}

interface SecretConf {
  privateKey: string
  salt: string
  expiry: number
}

interface DatabaseConf {
  name: string
  connect: string
}

interface AppConfig {
  server: ServerConf
  secret: SecretConf
  database: DatabaseConf
  version: number
}

const defaultConfig: AppConfig = {
  version: 1,
  server: {
    timeout: 60,
    address: ':2742',
  },
  secret: {
    expiry: 120,
    salt: '{change-me}',
    privateKey: '{change-me}',
  },
  database: {
    connect: '{change-me}',
    name: '{change-me}',
  },
}

export function loadConfigs(): AppConfig {
  const cfgOptions: AppConfig = {
    server: defaultConfig.server,
    secret: defaultConfig.secret,
    database: defaultConfig.database,
    version: defaultConfig.version,
  }

  // load into conf format
  const envKeys = Object.keys(process.env)
  for (const key of Object.keys(defaultConfig) as Array<keyof AppConfig>) {
    const envKey = key.toUpperCase().replace(/-/g, '_')
    const value = process.env[envKey] || defaultConfig[key]
    const path = key.split('.')
    let target = cfgOptions as any
    for (let i = 0; i < path.length - 1; i++) {
      target = target[path[i]]
    }
    target[path[path.length - 1]] = value
  }

  return cfgOptions
}
