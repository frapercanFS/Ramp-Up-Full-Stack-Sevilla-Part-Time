const mongodb = require("mongodb");
const uri = "mongodb://localhost:27017";

const client = new mongodb.MongoClient(uri);

client.connect((err) => {
  if (!err) {
    console.log("connection created");
  }
  const newDB = client.db("Curso");

  let Alumnos = newDB.collection("Alumnos");

  const query = { nombre: "Francisco" };

  const options = {
    sort: {},
    projection: { _id: 0, nombre: 1, apellido: 1 },
  };

  Alumnos.findOne(query, options).then((datos) => console.log(datos));
});
