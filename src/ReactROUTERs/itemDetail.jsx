
import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';



function ItemDetail({match}) {
    useEffect(()=> {
        fetchItem();
        // what is match
        //console.log(match);
    }, []);

    // what the hell is useState?!!!
    const [item, setItem] = useState({
        images: {}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`);
        

        const item = await fetchItem.json();

        setItem(item);
        console.log(item);
    }



  return (
      <React.Fragment>
        <h1>{item.name}</h1>
        <img src={item.images.background} alt={item.name}/>

    </React.Fragment>
  );
}

export default ItemDetail;
