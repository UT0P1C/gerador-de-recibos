require('dotenv').config()
const mongoose = require('mongoose')

class Database {
  constructor() {
    this.connection = mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  }
}

module.exports = new Database()