const mongodb = require('../config/mongodb')
const ObjectId = require('mongodb').ObjectId

function getAllCities(callback) {
  mongodb.connect((err, db) => {
    db.collection("cinemaCatalog").find({}, { cidade: 1, uf: 1, pais: 1 }).toArray(callback)
  })
}

function getCinemaByCityId(cityId, callback) {
  const objectCityId = ObjectId(cityId)
  mongodb.connect((err, db) => {
    db.collection("cinemaCatalog").find({ _id: objectCityId }, { cinemas: 1 })
      .toArray((err, cities) => {
        callback(err, cities[0].cinemas)
      })
  })
}

function disconnect() {
  return mongodb.disconnect()
}

module.exports = { getAllCities, getCinemaByCityId, disconnect }