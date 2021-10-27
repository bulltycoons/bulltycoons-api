import express from "express";
const app = express();
const port = 1234; // default port to listen

// define a route handler for the default home page
app.get( "/healthcheck", ( req, res ) => {
    res.send( "Perfectly working!" );
});

app.get("/metaverse/:id", (req, res) => {
    res.header("Content-Type",'application/json');
    const id = req.params.id;
    try {
        const verse = require(`../metaverses/${id}.json`);
        res.status(200);
        res.send(verse);
    } catch (err) {
        res.status(404);
        res.send({ message: "Not found" });
    }
});

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
});