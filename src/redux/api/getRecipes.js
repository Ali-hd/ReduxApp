import axios from 'axios'

const fetchData = async (state) => {
    try{
      //  if(state.type === 'load'){
           return await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=beef")
           .then(res => {
                   const output = res.data.meals[0]
                   return output
           })
           .catch(err => console.log(err))
          // }
       
    }catch(e){
        console.log(e)
        return 'error'
    }

 };

export default fetchData