const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

const app = express();

const DIST_DIR   = path.join(__dirname,  "../dist");
const CLIENT_DIR   = path.join(__dirname,  "../src/");
const port = process.env.PORT || 3000;

app.use(express.static(DIST_DIR));
app.use(morgan('dev'));
app.use(bodyParser.json());

/*--------- GET Handlers ----------*/

app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});


// app.get('*', (req, res) => {
//   res.end('404');
// });

/*--------- POST Handlers ----------*/

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
