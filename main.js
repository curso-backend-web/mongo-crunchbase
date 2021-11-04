import connection from './database.js';

connection.find('companies',{}).then(console.log).catch(console.error);