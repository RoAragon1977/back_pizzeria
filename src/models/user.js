import jwt from 'jsonwebtoken';

import mongoose, { Schema } from "mongoose";

const userScheme = new Schema({
  apellido: String,
  nombre: String,
  email: String,
  passwordHash: String,
  calle: String,
  altura: Number,
  ciudad: String,
  photoUrl: String,
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
  bloqueado: {
    default: false,
    type: Boolean,
  },
  allowsLocaStorage: {
    default: false,
    type: Boolean,
  },
  administrador: {
    default: false,
    type: Boolean,
  },
  favoritos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'accesorios',
    }
  ],
  carrito: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:'accesorios'
    }
  ],
  TemporaryToken: String,
});

// Genero el token de acceso (mi secreto)
userScheme.methods.generateAccesToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.SECRET);
  return token;
}; 

export default mongoose.model('user', userScheme);
