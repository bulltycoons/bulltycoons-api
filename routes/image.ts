import { Router } from 'express';
import axios from 'axios';
import { loadImage, healthCheck } from '../controllers/mediaController';

const imageRoute = Router();

imageRoute.get('/healthcheck', healthCheck);
imageRoute.get('/:id', loadImage);

export {
    imageRoute
}