import jwt from 'jsonwebtoken';

// Autentifica al usuario recibiendo el token enviado
function Authenticate(req, res, next) {
  const authHeader = req.headers['authorization'];
// Si token existe, recuperalo, sacarle los espacios y comienza de la primera pocision
const token = authHeader && authHeader.split(' ')[1];

if(!token)
  return res.status(404).json({
    ok: false,
    menssage: 'Usuario no autorizado: sin token'
  })

// si el token existe, lo verifico
    jwt.verify(token, process.env.SECRET, (error) => {
      if(error) {
        return res.status(404).json({
          ok:false,
          message: 'Usuario no autorizado: token invalido'
        });
      }

      nex();
    });
}

export { Authenticate };