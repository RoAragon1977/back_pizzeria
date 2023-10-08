import mongoose from "mongoose";

mongoose.set('strictQuery', true);

function connet() {
  mongoose.connect(process.env.DB_CONNECTION)
  .then((res) => console.log('Conección exitosa a la base de datos'))
  .catch((error) => console.log(error));
}

export default connet;

