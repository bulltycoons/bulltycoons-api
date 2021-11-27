import { Router } from 'express';

const teamRoute = Router();

teamRoute.get('/', (req, res, next) => {
    const baseImageURI = "https://gateway.pinata.cloud/ipfs/QmZg5Pxb2yieDmyZP6PAQL5fzXZEyM8RGjob562FcsFgaW";
    const teamMetadata = [
        { tokenId: 11, name: "Yitai", role: "Developer"},
        { tokenId: 34, name: "DopeBull", role: "Artist"},
        { tokenId: 13, name: "Tatsuya", role: "Strategy"},
        { tokenId: 22, name: "Marco POLO", role: "Public Relations"},
        { tokenId: 40, name: "Elite", role: "Community Manager"},
    ]
    res.status(200).json({baseImageURI, teamMetadata});
});

export {
    teamRoute
}