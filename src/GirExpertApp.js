import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory'; 
import {GifGrid} from './components/GifGrid';


export const GitExpertApp = () => {

    //const categories = ['onepunk', 'samuray x', 'Dregon ball z '];
    const [categories, setCategories] = useState(['batman']);

    /* const handleAdd=()=>{
        setcategories((c)=>[...c,'Batman']);
    } */

    return (
        <>
            <h2>GitExpertApp</h2>
            <hr />
              <AddCategory setCategories={setCategories} />  

             

            <ol>
                {
                    categories.map(
                        category => (
                            <GifGrid
                            key={category}  
                            category={category} 
                        
                             />

                        )
                       // <li key={categorie} >{categorie}</li>
                    )
                }
            </ol>

            {/* <button onClick={handleAdd} >Agregar</button> */}

        </>

    )


};

