var mysql = require('mysql');
const request = require('request');

var brand = 'audi'
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "cars1demo"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
})

request.get({
    url: 'https://api.api-ninjas.com/v1/cars?make=' + brand,
    headers: {
        'X-Api-Key': 'USqf06GX5DhTAPyggfT1MQ==MR14jCa1RxGj3YcY'
    },
}, function (error, response, body) {
    if (error) return console.error('Request failed:', error);
    else if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
    else {
        var coches = body;
        console.log(coches[1])
    }
})

/*         var sql = "INSERT INTO cars (brand, model) VALUES (cars., 'Highway 37')";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("cars recorded");
        }); */