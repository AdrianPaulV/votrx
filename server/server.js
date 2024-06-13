const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

/**
 * require routers
 */
const api = require('./routes/api');
const characters = require('./routes/characters');

/**
 * handle parsing request body
 */
app.use(express.json());

/**
 * handle requests for static files
 */
// app.use(express.static(path.join(__dirname, '../client'))); -> I think this is not needed because of react-router and webpack proxy, until production

/**
 * define route handlers
 */
// app.use('/api', api);
// app.use('/api/characters/', characters);

/**
 * configure express global error handler
 */
app.use((err, req, res, next) => {
  
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }, 
  };
  
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  console.log(err);
  return res.status(errorObj.status).json(errorObj.message.err);
  //if this doesn't work, try removing .err first like the readme has it?
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
