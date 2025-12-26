const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb')
const bodyparser = require('body-parser')
const cors = require('cors')

dotenv.config()

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

const dbName = 'passop'
const app = express()
const port = 3000

app.use(bodyparser.json())
app.use(cors())

// GET all passwords
app.get('/', async (req, res) => {
  const db = client.db(dbName)
  const collection = db.collection('passwords')
  const data = await collection.find({}).toArray()
  res.json(data)
})

// SAVE password
app.post('/', async (req, res) => {
  const db = client.db(dbName)
  const collection = db.collection('passwords')
  const result = await collection.insertOne(req.body)
  res.json({ success: true, result })
})

// DELETE password
app.delete('/', async (req, res) => {
  const db = client.db(dbName)
  const collection = db.collection('passwords')
  const result = await collection.deleteOne({ id: req.body.id })
  res.json({ success: true, result })
})

// 🔥 Proper Mongo connection
async function startServer() {
  await client.connect()
  console.log("MongoDB Connected")

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
  })
}

startServer()
