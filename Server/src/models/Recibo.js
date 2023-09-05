const mongoose = require('mongoose')
const schema = new mongoose.Schema(
  {
    client_name: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    preco: {
      type: String,
      required: true,
    },
    data: {
      type: Date,
    },
  },
  {
    collection: 'recibos',
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Recibo', schema)
