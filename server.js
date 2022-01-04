const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;
// import sequelize connection
const sequelize = require('./config/connection');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

// sync sequelize models to the database, then turn on the server

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});