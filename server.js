const express = require('express');
const cookieParser = require('cookie-parser');
const db = require('./models');
const app = express();
const cors = require('cors');
const rootRouter = require('./routes');
require('dotenv').config();
app.use(express.json());
app.use(cookieParser());

// Set app config
const title = process.env.TITLE;
const port = process.env.PORT;
const baseUrl = process.env.URL + port;

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use('/api', rootRouter);

db.sequelize.sync().then(() => {
    app.listen(port, () => console.log(title + " run on " + baseUrl))
});