require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const testSchema = require('./schema/testSchema');
const mongoose = require('mongoose');
const si = require('systeminformation');

const app = express();

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to DB...');
    const listener = app.listen(process.env.PORT || 4000, () => {
      console.log('Your app is listening on port ' + listener.address().port);
    });
  })
  .catch((error: unknown) => console.log(error));

  // setInterval(() => {
  //   si.disksIO().then(data => console.log(data))
  // },10000)

app.use('/graphql', graphqlHTTP({
    schema: testSchema,
    graphiql: true
}));

app.use('/', (req: Request, res: Response):void => {
  console.log('hello')
}) 