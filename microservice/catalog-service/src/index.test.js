require("dotenv-safe").config();
require("./config/mongodb.test").runTests();
require("./server/server.test").runTests();