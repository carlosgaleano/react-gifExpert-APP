import React,{useState} from 'react';
import propTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

     const handleOnCahnge=(e) => {
        setinputValue(e.target.value)
     }

     const hanleSubmit=(e)=>{
         e.preventDefault();
         
         if(inputValue.trim().length > 2 ){
            setCategories( (cats)=>[inputValue,...cats] );
            setinputValue('');

         }
        
        // console.log('subtmit hecho');
     }

    return (
        <form onSubmit={hanleSubmit}>
            
            <h2>{inputValue}</h2>
            < input 
                type="text"
                value={inputValue}
                onChange={handleOnCahnge}
            />
         </form>
    )
}
AddCategory.propTypes={
    setCategories: propTypes.func.isRequired
}
