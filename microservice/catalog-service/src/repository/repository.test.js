const test = require('tape')
const repository = require('./repository')

function runTests() {
  let cityId = null
  let cinemaId = null
  let movieId = null

  test('Repository getAllCities', (t) => {
    repository.getAllCities((err, cities) => {
      if (cities && cities.length > 0) cities[1]._id; //porto alegre
      t.assert(!err && cities && cities.length > 0, "All cities returned")
      t.end()
    })
  })

}
module.exports = { runTests }