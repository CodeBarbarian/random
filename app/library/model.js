let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'development',
    password: 'development',
    database: 'development'
});

connection.connect(function(error) {
    if (error) {
        return console.error('error :' + error.message);
    }

    console.log('Connected to MySQL Server');
});

connection.end(function(error) {
    if (error) {
        return console.error('error : ' + error.message);
    }

    console.log("MySQL Connection ended")
});