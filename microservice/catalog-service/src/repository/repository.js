//repository.js
const database = require("../config/database");
const { ObjectId } = require("mongodb");

async function getAllCities() {
  const db = await database.connect();
  return db.collection("cinemaCatalog").find({}, { cidade: 1, uf: 1, pais: 1 }).toArray();
}

async function getCinemasByCityId(cityId) {
  const objCityId = new ObjectId(cityId);
  const db = await database.connect();
  return db.collection('cinemaCatalog').find({ _id: objCityId }, { cinemas: 1 }).toArray();
}

async function disconnect() {
  return database.disconnect();
}

async function getMoviesByCinemaId(cinemaId) {
  try {
    const objCinemaId = new ObjectId(cinemaId);
    const db = await database.connect();
    return db.collection("cinemaCatalog").aggregate([
      { $match: { "cinemas._id": objCinemaId } },
      { $unwind: "$cinemas" },
      { $unwind: "$cinemas.salas" },
      { $unwind: "$cinemas.salas.sessoes" },
      { $group: { _id: { filme: "$cinemas.salas.sessoes.filme", idFilme: "$cinemas.salas.sessoes.idFilme" } } }
    ]).toArray();
  } catch (error) { console.log(error.message) }
}

async function getMoviesByCityId(cityId) {
  const objCityId = new ObjectId(cityId);
  const db = await database.connect();
  const sessions = await db.collection("cinemaCatalog").aggregate([
    { $match: { "_id": objCityId } },
    { $unwind: "$cinemas" },
    { $unwind: "$cinemas.salas" },
    { $unwind: "$cinemas.salas.sessoes" },
    { $group: { _id: { filme: "$cinemas.salas.sessoes.filme", idFilme: "$cinemas.salas.sessoes.idFilme" } } }
  ]).toArray();
  return sessions.map(item => item._id);
}

async function getMovieSessionsByCityId(movieId, cityId) {
  try {

    const objMovieId = new ObjectId(movieId);
    const objCityId = new ObjectId(cityId);
    const db = await database.connect();
    const sessions = await db.collection("cinemaCatalog").aggregate([
      { $match: { "_id": objCityId } },
      { $unwind: "$cinemas" },
      { $unwind: "$cinemas.salas" },
      { $unwind: "$cinemas.salas.sessoes" },
      { $match: { "cinemas.salas.sessoes.idFilme": objMovieId } },
      { $group: { _id: { filme: "$cinemas.salas.sessoes.filme", idFilme: "$cinemas.salas.sessoes.idFilme", idCinema: "$cinemas._id", sala: "$cinemas.salas.nome", sessao: "$cinemas.salas.sessoes" } } }
    ]).toArray();
    return sessions.map(item => item._id);
  } catch (error) { console.log(error.message) }
}

async function getMovieSessionsByCinemaId(movieId, cinemaId) {
  try {

    const objCinemaId = new ObjectId(cinemaId);
    const objMovieId = new ObjectId(movieId);
    const db = await database.connect();
    const sessions = await db.collection("cinemaCatalog").aggregate([
      { $match: { "cinemas._id": objCinemaId } },
      { $unwind: "$cinemas" },
      { $unwind: "$cinemas.salas" },
      { $unwind: "$cinemas.salas.sessoes" },
      { $match: { "cinemas.salas.sessoes.idFilme": objMovieId } },
      { $group: { _id: { filme: "$cinemas.salas.sessoes.filme", idFilme: "$cinemas.salas.sessoes.idFilme", sala: "$cinemas.salas.nome", sessao: "$cinemas.salas.sessoes" } } }
    ]).toArray();
    return sessions.map(item => item._id);
  } catch (error) { console.log(error.message) }
}

module.exports = { getAllCities, getCinemasByCityId, disconnect, getMoviesByCinemaId, getMoviesByCityId, getMovieSessionsByCityId, getMovieSessionsByCinemaId }