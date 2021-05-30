import axios from 'axios';


export const GetData = async () => {
    try{
        const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/db');
        return (res.data);
    }catch(err){
        console.error(err);
    }
}

export const PostCountrie = async (countries) => {
    const configRequest = {
        method: 'post',
        url: 'https://api-fake-pilar-tecno.herokuapp.com/countries',
        data: {name: countries}
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        console.error(err)
        
    }
}


export const DeleteCountrie = async (id) => {
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
