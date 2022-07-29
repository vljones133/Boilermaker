// say our sequelize instance is create in 'db.js'
const { db } = require('./server/db');
// and our server that we already created and used as the previous entry point is 'server.js'
const app = require('./server');
const PORT = 3000;

db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => {
    console.log('db synced');
    app.listen(PORT, () => console.log(`finding things to do on port ${PORT}`));
  });
