const express = require('express');

const PORT = process.env.PORT || 5000;
const router = require('./router');

const app = express();

app.use(router);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
