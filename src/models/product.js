import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema ({
  nombre: String,
  precio: Number,
  descripcion: String,
  urlImg: String
})

export default mongoose.model('product', productSchema);