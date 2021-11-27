import { NextFunction, Request, Response } from 'express';
import axios from 'axios';
import path from 'path';

export const healthCheck = async (req:Request, res:Response, next:NextFunction) => {
    res.send("Perfectly working!");
}

export const loadImage = async (req:Request, res:Response, next:NextFunction) => {
    const { id } = req.params;
    const baseImageURI = "https://gateway.pinata.cloud/ipfs/QmZg5Pxb2yieDmyZP6PAQL5fzXZEyM8RGjob562FcsFgaW";

    axios .get(`${baseImageURI}/${id}.png`, { responseType: 'arraybuffer' })
    .then(response => {
        res.type('png');
        res.send(Buffer.from(response.data, "utf-8"));
    })
    .catch(err => {
        // console.log(err, "<== Loading File Error for id ", id);
        res.status(404).send("Image not loaded");
    });

}