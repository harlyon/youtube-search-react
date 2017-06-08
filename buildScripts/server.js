import express from 'express'
import morgan from 'morgan'
import webpack from 'webpack'
import path from 'path'
import config from '../webpack.config.dev'

const port = 8080
const app = express()
const compiler = webpack(config)
// set up morgan logger
app.use(morgan('dev'))

app.use(require('webpack-dev-middleware')(compiler))

app.set('view engine', 'pug')
// main route
app.get('*', (req, res) => {
  res.render(path.join(__dirname, '../src/views'), { title: 'Welcome!' })
})
// start server
app.listen(port, (err) => {
  if (err) throw new Error(err)
  else console.log(`Listening on port: ${port}`)
})
