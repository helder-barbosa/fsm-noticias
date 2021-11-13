# fsm-noticias

## Início

Portal de noticias, com interfaces adequadas a permissão de usuário. Com autenticação por Facebook e Google.


### Pré-requisitos:

Você precisa do NodeJS e do NPM instalado em sua máquina.

```
npm install
npm start
```

### Criar credenciais para utilização da Strategy.

* Facebook Strategy ->  https://developers.facebook.com/apps/
* Google Strategy ->  https://console.developers.google.com/

Exemplo: 
```
passport.use(new GoogleStrategy({
  clientID: 'XXXXX',
  clientSecret: 'XXXX',
  callbackURL: 'http://localhost:3000/google/callback',

},

```
## Construído com:

* [ExpressJS](https://expressjs.com/pt-br/) - Express é um framework para aplicativo da web do Node.js.
* [EJS](https://ejs.co/) - Embedded JavaScript templating.
* [PassportJS](http://www.passportjs.org/) - Passport is authentication middleware for Node.js.

## Author:

* **Helder Barbosa** - [LinkedIn](https://www.linkedin.com/in/helder-barbosa1/)


## Licença

Este projeto é licenciado sobre a licença MIT - veja [LICENSE.md](LICENSE.md) para mais informações.

## Acknowledgments

* Este projeto foi construído durante as aulas do curso FullStack Master de [devPleno](https://devpleno.com/).

