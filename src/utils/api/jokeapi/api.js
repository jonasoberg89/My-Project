import axios from 'axios';

const getJoke = () => {
return axios
.get("https://official-joke-api.appspot.com/random_joke")
.then(res=>{
    return res.data
}).catch(err=>{
    return err;
})
}

export default getJoke;