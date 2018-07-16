import { NextFunction, Request, Response }  from 'express';
import * as sitesService from '../../../services/Sites';

export async function search(req: Request, res: Response, next: NextFunction) : Promise<void> {        
    const result = await sitesService.search(req.params.search);
    if(result)            
        res.status(200).send(result);
    else
        res.status(401).send({message: 'Houve um erro na requisição'});    
}