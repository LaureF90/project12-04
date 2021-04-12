import React, { useState } from 'react';

const Favourites = (props) => {
    const [isFavorite, setIsFavorite] = useState(false);
   
    return (
      <div className='Favourite'>
        <button className='favorite' onClick={() => setIsFavorite(!isFavorite)}>
        {isFavorite ? '❤️' : '🖤'}
      </button>
        
      </div>
    );
  };
  
export default Favourites;