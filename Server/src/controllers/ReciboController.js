const Recibo = require('../models/Recibo')

class ReciboController {
  async getRecibo(req, res) {
    const recibos = await Recibo.find()

    if (!recibos) {
      return res.status(404).json({ error: 'recibos não encontrado' })
    }

    return res.status(200).json({ recibos })
  }

  async postRecibo(req, res) {
    const { client_name, descricao, data, preco } = req.body

    const recibo = await Recibo.create({ client_name, descricao, data, preco })

    try {
      await recibo.save()
      return res.status(200).json({ message: 'recibo registrado com sucesso' })
    } catch (error) {
      return res.status(500).json({ error: 'erro ao criar recibo' })
    }
  }
}

module.exports = new ReciboController()
