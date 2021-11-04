import connection from './database.js';
console.log(connection.db);
connection.find('companies',{}).then(console.log).catch(console.error);