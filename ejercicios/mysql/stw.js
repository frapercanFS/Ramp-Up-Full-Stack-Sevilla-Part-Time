let mysql = require('mysql');
const request = require('request');

let brand = 'audi'
let lista = undefined
let con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "mycars"
});

const connection = () => {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
}
const createDatabase = () => {
    con.query("CREATE DATABASE mycars", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
}

const createTable = () => {
    var sql = "CREATE TABLE mycars (d INT AUTO_INCREMENT PRIMARY KEY, brand VARCHAR(255), model VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
}

const insertInto = (columns, values) => {
    var sql = `INSERT INTO mycars (${columns}) VALUES (${values})`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("cars recorded");
    });
}

async function coches() {
    request.get({
        url: 'https://api.api-ninjas.com/v1/cars?make=' + brand,
        headers: {
            'X-Api-Key': 'USqf06GX5DhTAPyggfT1MQ==MR14jCa1RxGj3YcY'
        },
    }, function (error, response, body) {
        if (error) return console.error('Request failed:', error);
        else if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
        else {
            let json = JSON.parse(body);
            const keys = Object.keys(json[0])
            const values = Object.values(json[0])
            connection()
            console.log(keys, values)
        }
    })
}

coches()