import { NextFunction, Request, Response }  from 'express';
import * as itemsService from '../../../services/Items';
export async function itemsById(req: Request, res: Response, next: NextFunction): Promise<void> {
        const result = await itemsService.itemsById(req.params.id); 
        if (result)
            res.status(200).send(result);
        else
            res.status(401).send({message: 'Houve um erro na requisição'});
}