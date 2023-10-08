import productScheme from '../models/product';
import userScheme from '../models/user';
import { Compare, Encrypt } from '../helpers/password.helper';

// Agregar un usuario a la base de datos
async function AddUser(req, res) {
  try {
    const { apellido, nombre, email, password, calle, altura, ciudad, fotoUrl } = req.body;
    const passwordHash = await Encrypt(password);
    console.log(passwordHash); // Borrar
    const newUser = await userScheme.create({
      apellido,
      nombre,
      email,
      password,
      calle,
      altura,
      ciudad,
      fotoUrl,
      favoritos: [],
    });
    return res.json({
      ok: true,
      data_added: newUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      ok: false,
      message: error,
    });
  }
}

export { AddUser };