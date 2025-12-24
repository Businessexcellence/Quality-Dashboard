module.exports = {
  apps: [
    {
      name: 'webapp',
      script: 'npx',
      args: 'http-server dist -p 3000 -a 0.0.0.0 -c-1',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}
