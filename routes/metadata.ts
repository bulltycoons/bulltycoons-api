import { Router } from "express";
import { addMetadata, getMetadataById, healthCheck, updateMetadataAttributesById } from "../controllers/metadataController";

const metadataRoute = Router();

metadataRoute.get('/healthcheck', healthCheck);
metadataRoute.post('/add', addMetadata);
metadataRoute.get('/:id', getMetadataById);
metadataRoute.put('/:id', updateMetadataAttributesById);

export {
    metadataRoute
}