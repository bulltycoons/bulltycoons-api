import express, { json as expressJson } from "express";
import { PORT } from "./config";
import cors from "cors";
import { json as bodyParserJson } from "body-parser";
import { metadataRoute } from "../routes/metadata";
import { contractRoute } from "../routes/contract";
import { teamRoute } from "../routes/team";
import { roadmapRoute } from "../routes/roadmap";
import { imageRoute } from "../routes/image";

const app = express();

app.use(cors());
app.use(expressJson());
app.use(bodyParserJson());

app.use('/api', metadataRoute);
app.use('/contract', contractRoute);
app.use('/team', teamRoute);
app.use('/roadmap', roadmapRoute);
app.use('/image', imageRoute);

// define a route handler for the default home page
app.get( "/healthcheck", ( req, res ) => {
    res.send( "Perfectly working!" );
});

// start the Express server
app.listen( PORT, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ PORT }` );
});