
let database = require('./db');
let generateUsers = require('./generateUsers');
let generateAssets = require('./generateAssets');

const threshold = 50;

database.users = generateUsers(threshold);
database.assets = generateAssets(threshold, database.users);
  

console.log(JSON.stringify(database));
