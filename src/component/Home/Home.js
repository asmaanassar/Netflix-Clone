import {useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import MovieList from '../MovieList/MovieList';

function Home() {
    const [data, setData] = useState([]);
    const getAllRecipes = async () => {
        // await // here the thing that will happen (fetching from API or getting from database )
        // return await axios.get(`${process.env.REACT_APP_BASE_URL}/recipes`)
        return await axios.get(`https://movieasma.herokuapp.com/trending`)
            .then(result => {
                console.log(result.data);
                return result.data;
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(()=>{
        void(async()=>{
          let data = await getAllRecipes();
          setData(data);
        })();   
    },[]);

    return(
<>
<MovieList data={data} />

</>

    )
}
    export default Home;