var connection = require('./config/connection.js');

function testConnection() {
    connection.query("SELECT * FROM burgers LIMIT 3", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}

testConnection();