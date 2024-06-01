const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const router = require('./routes/routes');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const auth = require('./middleware/auth');
const usuariocontroller = require('./controllers/usuariocontroller');
const PORT = process.env.PORT || 3000;

//Configura Cookie Parser
app.use(cookieParser());
//configuracion del dotenv 
dotenv.config();

app.use(session({
  secret: process.env.ACCESS_TOKEN_SECRET, // Clave secreta para firmar la cookie de sesión
  resave: false,
  saveUninitialized: false
}));

// Middleware para parsear JSON
app.use(express.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware para procesar archivos estáticos en la carpeta 'public'
app.use(express.static('public'));
app.use(express.json());

// Configurar estrategia de autenticación local
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await usuariocontroller.logearUsuario(username, password);
      if (!user) {
        return done(null, false, { message: 'Usuario o contraseña incorrecto' });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (user, done) => {
  done(null, user);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal');
});

app.use(express.urlencoded({ extended: true }));

app.use('/', router);
// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://www.cashfly.com:${PORT}`);
});