import express from 'express';
import router from './routes/routes';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT: number = 8000;

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router);
//routes.initialize(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
