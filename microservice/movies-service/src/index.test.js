require("dotenv-safe").config();
require("./config/mongodb.test").runTests();
require("./repository/repository.test").runTests();