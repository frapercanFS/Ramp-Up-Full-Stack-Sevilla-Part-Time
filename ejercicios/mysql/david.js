var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ejercicio_coches",
});
/* Crear Tablas MSQL
con.query("CREATE DATABASE ejercicio_coches", function (err, result) {
  if (err) throw err;
  console.log("Database created"); */

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  //Acceso a la API
  const request = require("request");
  var model = ["toyota", "audi", "ford", "volkswagen"];
  request.get(
    {
      url: "https://api.api-ninjas.com/v1/cars?make=" + model,
      headers: {
        "X-Api-Key": "YFAGMTkZFuDdhMNn2HAipQ==w4rdzoAOMdpaHAKs",
      },
    },
    function (error, response, body) {
      if (error) return console.error("Request failed:", error);
      else if (response.statusCode != 200)
        return console.error(
          "Error:",
          response.statusCode,
          body.toString("utf8")
        );
      else {
        var coches = JSON.parse(body);
        let customer = Object.keys(coches[0]);
        let tableCustomers =
          "(" + customer.join(" VARCHAR(255), ") + " VARCHAR(255));";
        let table = tableCustomers.toString();

        var sql = "CREATE TABLE coches " + table;
        console.log(sql);
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Table created");
        });

        /*  Formato JSON
        let objCoches = []
        coches.forEach((element) => objCoches.push(element));
        console.log(console.log(coches)) */

        let valores = [];
        for (coche of coches) {
          let valor = Object.values(coche);
          valores.push(valor);
        }
        let customers = customer.toString();

        var sql = "INSERT INTO coches (" + customers + ") VALUES ?";
        console.log("customers", customers, "valores", valores);
        var values = valores;
        con.query(sql, [values], function (err, result) {
          if (err) throw err;
          console.log("Number of records inserted: " + result.affectedRows);
        });
      }
    }
  );
});
