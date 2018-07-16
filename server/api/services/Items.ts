import axios from 'axios';

export async function itemsById(id: any) {    
    try {
        const result = await axios.get(`https://api.mercadolibre.com/items/${id}`);
        const description = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
        result.data.description = description.data;    
        return result.data;
    } catch(error) {        
        return 'produto desconhecido';
    }    
}