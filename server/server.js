const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection');
// const routes = require('./routes.js');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user1:tuterapp123@tuterapp.ax7darj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentsDB';


const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

app.use(express.json());

app.post('/addUser', (req, res) => {
  const { username, email, password } = req.body;
  // Do something with the received data (e.g. add it to a database)
  console.log(`Received data: ${username}, ${email}, ${password}`);
  res.send('Data received!');
});



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);
 
 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.post('/', (req, res) => {
  // Use db connection to add a document
  db.collection('tuters').insertOne({name: req.body.name}), (err, result) => { 
      if (err) throw err;
      res.json(result);
    }
  ;
});

app.get('/', (req, res) => {
  // Use db connection to find all documents in collection
  db.collection('tuter').find((err, result) => {
    if (err) throw err;
    res.send(result);
  })
});





