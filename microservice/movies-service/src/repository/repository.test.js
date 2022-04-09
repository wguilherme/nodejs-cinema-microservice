const test = require('tape')
const repository = require('./repository')

function runTests() {
  var id = null

  test('Repository GetAllMovies', (t) => {
    repository.getAllMovies((err, movies) => {
      console.log('debug getAllMovies', movies)
      if (movies && movies.length > 0) id = movies[0]._id

      t.assert(!err && movies && movies.length > 0, "All movies returned")

      t.end()
    })
  })

  test('Repository GetMovieById', (t) => {
    if (!id) {
      t.assert(false, "Movie by Id Returned")
      t.end()
      return
    }

    repository.getMovieById(id, (err, movie) => {
      t.assert(!err && movie, "Movie by Id Returned")
      t.end()
    })
  })

  test('Repository disconnect', (t) => {
    t.assert(repository.disconnect(), "Disconnected")
    t.end()
  })


}

module.exports = { runTests }