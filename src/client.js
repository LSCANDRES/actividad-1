import axios from 'axios';


export const getData = async () => {
    try{
        const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/db');
        return (res.data);
    }catch(err){
        console.error(err);
    }
}

export const postPais = async (countrie) => {
    const configRequest = {
        method: 'post',
        url: 'https://api-fake-pilar-tecno.herokuapp.com/countries',
        data: {name: countrie}
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        console.error(err)
        
    }
}


export const deletepais = async (id) => {
    console.log(id)
    const configRequest = {
        method: 'DELETE',
        url: 'https://api-fake-pilar-tecno.herokuapp.com/countries/'+id,
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        console.error(err)
        
    }
};


/* Ciudad */
export const getDataC = async () => {
    try{
        const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/db');
        return (res.data);
    }catch(err){
        console.error(err);
    }
}

export const postCiudad = async (countrie) => {
    const configRequest = {
        method: 'post',
        url: 'https://api-fake-pilar-tecno.herokuapp.com/places',
        data: {name: countrie}
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        console.error(err)
        
    }
}


export const deleteCiudad = async (id) => {
    console.log(id)
    const configRequest = {
        method: 'DELETE',
        url: 'https://api-fake-pilar-tecno.herokuapp.com/places'+id,
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        console.error(err)
        
    }
};


  
