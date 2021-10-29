const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const mongo = process.env.MONGODB || 'mongodb://localhost/noticias'

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => res.render('index'))

mongoose
  .connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => console.log('Listening...'))
  })
  .catch(e => console.log(e))

const User = require('./models/user')
const user = new User({
  username: 'john-michael',
  password: 'abc123'
})
user.save(() => console.log('ok'))