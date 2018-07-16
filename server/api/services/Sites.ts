import axios from 'axios';
import * as itemsService from './Items';
export async function search(query: any) {
    const result = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);    
    const items = [];
    console.log(result.data.results);
    if (result.data.results.length > 0) {        
        for(let a = 0; a < 4; a++) {
            items.push(result.data.results[a]);
        }
    } else {        
        const result = await itemsService.itemsById(query);        
        if (result.id !== null && result.id !== undefined) {            
            items.push(result);
        }
    }
    
    return items;
}