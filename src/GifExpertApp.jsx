
import React from 'react';
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  // Hook de react que mantiene el estado. La primera "categories" Es el valor inicial, en este caso "One Punch", la otra
  // "setCategories" nos va a servir para agregar otros estados al inicial 
  const [categories, setCategories] = useState( [ 'One Punch' ] );  

  const onAddCategory = ( newCategory ) => {

   if(categories.includes(newCategory)) return;

   setCategories( [ newCategory, ...categories, ] );
   //setCategories( cat => [...cat, 'Valorant']);
  }

  return (
    <>

        <h1>GifExpertApp</h1>

        <AddCategory 
        onNewCategory = { value => onAddCategory(value) } // Esta emitiendo algo.

        />
        
            { 
                categories.map(  (category) =>  ( 
                   <GifGrid 
                   key={category} category={ category }/> ))
            }


    </>
  )
}
