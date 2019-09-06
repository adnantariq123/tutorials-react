import React from 'react';

const PokemonList = (props) => {
    return(
        <React.Fragment>
            <table>
            <tbody>
            {props.pokemon.map(p=>(
                
                    
                    <tr key={p.name}>
                        <td>{p.name}</td>
                        {/* <td><img src={p.url}/></td> */}
                    
                    </tr>
                    
               
            ))}
            </tbody>
             </table>
        </React.Fragment>
    )

}

export default PokemonList;