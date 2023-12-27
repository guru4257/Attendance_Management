const mongoose = require('mongoose')

const connection = mongoose.createConnection('mongodb+srv://guruprasath4257:q6CjtxX2RvsYSDRj@cluster0.gcxpwzg.mongodb.net/?retryWrites=true&w=majority')
const Db = connection.useDb('ATTENDANCE_MANAGEMENT')

module.exports = { Db }