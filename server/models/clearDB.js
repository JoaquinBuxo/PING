// const mongoose = require('mongoose');

// // Conecta ao banco de dados
// mongoose.connect('mongodb://127.0.0.1:27017/PING', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Conexão com o banco de dados estabelecida');
// }).catch((error) => {
//   console.log(`Erro ao conectar ao banco de dados: ${error}`);
// });

// const clearDB = async () => {
//   try {
//     const collections = mongoose.connection.collections;
//     for (const key in collections) {
//       const collection = collections[key];
//       await collection.deleteMany();
//     }
//   } catch (error) {
//     console.log(error)
//   }
// };

// // Espera pela conexão ser estabelecida antes de chamar clearDB
// mongoose.connection.once('open', async () => {
//   await clearDB();
// });

// module.exports = clearDB;

const mongoose = require('mongoose');

const clearDB = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
};

module.exports = clearDB;
