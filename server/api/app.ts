import { router as apiRoutes } from './routes';
import * as config from './config';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { cors } from './middlewares/cors';

const app = express();

app.use(cors);


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json({limit: '50mb'}));

app.use('/api', apiRoutes);

app.listen(config.PORT, () => console.log(`server started: PORT: ${config.PORT} | ENV: ${config.ENV}`));
module.exports = app;