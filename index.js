const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const User = require('./models/user')
const mongo = process.env.MONGODB || 'mongodb://localhost/noticias'

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static('public'))

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
}

app.get('/', (req, res) => res.render('index'))

mongoose
  .connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    createInitialUser()
    app.listen(port, () => console.log('Listening...'))
  })
  .catch(e => console.log(e))
