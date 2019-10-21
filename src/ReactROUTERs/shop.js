import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';



function Shop() {

    useEffect(()=> {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async ()=> {
        const data= await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');

        const xyz = await data.json();
        console.log(xyz.items);
        setItems(xyz.items);
    }



  return (
      <React.Fragment>
        <h1>React Routers - Shop</h1>
            {items.map(item => (
                // <div key={items.itemid} >
                //     <h4>{item.name}</h4>
                //     <p>{item.description}</p>
                // </div>

                <table key={item.itemid} >
                    <tbody>
                    <tr>
                        <td><Link to={`/shop/${item.itemid}`}>{item.name}</Link></td>
                        {/* <td>{item.description}</td> */}
                        {/* <td><img src={item.item.image} alt={item.name}/></td> */}
                    </tr>
                    </tbody>
                </table>
            ))}
    </React.Fragment>
  );
}

export default Shop;
