import express, { json as expressJson } from "express";
import { PORT } from "./config";
import cors from "cors";
import { json as bodyParserJson } from "body-parser";
import { metadataRoute } from "../routes/metadata";

const app = express();

app.use(cors());
app.use(expressJson());
app.use(bodyParserJson());

app.use('/api', metadataRoute);

// define a route handler for the default home page
app.get( "/healthcheck", ( req, res ) => {
    res.send( "Perfectly working!" );
});

// start the Express server
app.listen( PORT, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ PORT }` );
});