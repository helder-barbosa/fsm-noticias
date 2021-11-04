const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const User = require('./models/user')
const Noticia = require('./models/noticia')
const mongo = process.env.MONGODB || 'mongodb://localhost/noticias'
const noticias = require('./routes/noticias')
const restrito = require('./routes/restrito')
const auth = require('./routes/auth')
const pages = require('./routes/pages')
const session = require('express-session')
const bodyParser = require('body-parser')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(session({ secret: 'fullstack-master' }))
app.use(bodyParser.urlencoded({ extended: true }))


app.use(express.static('public'))

app.use('/', auth)
app.use('/', pages)

app.use('/restrito', restrito)
app.use('/noticias', noticias)


const createInitialUser = async () => {
  const total = await User.countDocuments({ username: 'system_admin' })
  if (total === 0) {
    const user = new User({
      username: 'system_admin',
      password: 'byte86'
    })
    await user.save()
    console.log('user CREATED')
  } else {
    console.log('create User SKIPPED')
  }
  /*
  const noticia = new Noticia({
    title: 'Noticia Publica' + new Date().getTime(),
    content: 'content',
    category: 'public'
  })
  await noticia.save()

  const noticia2 = new Noticia({
    title: 'Noticia Privada' + new Date().getTime(),
    content: 'content',
    category: 'private'
  })
  await noticia2.save()
  */
}


mongoose
  .connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    createInitialUser()
    app.listen(port, () => console.log('Listening...'))
  })
  .catch(e => console.log(e))
