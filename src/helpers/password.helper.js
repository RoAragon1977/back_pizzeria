import bcrypt from 'bcrypt';

const saltRounds = parseInt(process.env.SALT_ROUND);

// Encripta el password del usuario
async function Encrypt(password) {
  return bcrypt.hash(password, saltRounds);
};

// Compara los password encriptados
async function Compare(password, hash) {
  return await bcrypt.compare(password, hash);
};

export { Compare, Encrypt };