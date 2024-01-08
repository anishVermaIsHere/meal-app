import axios from 'axios';

axios.defaults.baseURL='https://www.themealdb.com';

export const getMeals=async()=>{
    const url='/api/json/v1/1/search.php?s=a'; // for random meals set 'random.php'
    return await axios.get(url);
}

export const getMealBySearch=async(query)=>{
    const url=`/api/json/v1/1/search.php?s=${query}`; 
    return await axios.get(url);
}
