import express, {Request, Response} from 'express';

const router = express.Router();

router.get('/', (req:Request,res:Response):void => {
    res.json({data: "home page"})
})

router.get('/about', (req:Request,res:Response):void => {
    res.json({data: "About page"})
})

export {router}