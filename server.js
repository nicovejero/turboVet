import express from 'express';
import routes from './routes/routes.js';
import loadStartData from './seed/seeds.js';
import connectionDb from './database/database.js';
import 'dotenv/config.js';
import cors from 'cors';

const appPort = process.env.APP_PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

await 
  loadStartData(connectionDb)
  .then(() => {
  app.listen(appPort, () => {
    console.log('Server ok http://localhost:8080');
  });
});

app.on('error', (error) => {
  console.log(error.message);
});
