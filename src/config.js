const host = {
  development: 'http://localhost:9000',
  production: 'http://postbin.link'
}

export default {
  host: host[process.env.NODE_ENV]
}
