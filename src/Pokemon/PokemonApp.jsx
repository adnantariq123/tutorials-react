import React, {useState, useEffect} from 'react';
// what is useState, useEffect


import PokemonList from "./PokemonList";
import Pagination  from "./Pagination";
import axios from'axios';


const Pokemon =()=> {

    //const [Pokemon, setPokemon] = useState(["bulbasur" , "charmander"]);

    const[Pokemon, setPokemon] = useState([]);
    const[currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const[nextPageUrl, setNextPageUrl] = useState();
    const[prevPageUrl, setPrevPageUrl] = useState();
    const[loading, setLoading] = useState(true);


    useEffect(()=> {
        setLoading(true)
        let cancel

        axios.get(currentPageUrl, {
            cancelToken: new axios.CancelToken(c=> cancel =c)
        }).then(res => {
            setLoading(false)
            setNextPageUrl(res.data.next)
            setPrevPageUrl(res.data.previous)
            //setPokemon (res.data.results.map(p=> p.name))
            setPokemon (res.data.results.map(p=> p))
        })

        return () => {
            cancel()
        }
    },[currentPageUrl])

    function goToNextPage() {
        setCurrentPageUrl(nextPageUrl)
        //console.log("ce")
    }

    function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl)
    }    

    if(loading) return "Loading..."


    return(
        <React.Fragment>
            <PokemonList pokemon = {Pokemon}/>
            <Pagination 
            gotoNextPage= {nextPageUrl ? goToNextPage : null}
            gotoPrevPage= {prevPageUrl ? goToPrevPage :null}
            />
            
        </React.Fragment>
    )
}

export default Pokemon;