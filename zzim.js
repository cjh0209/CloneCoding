import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Zzim () {
  const [isFavorite, setFavorite] = useState(false);
  const [count, setCount] = useState(0);

  const handleFavorite = () => {
    setFavorite(!isFavorite);
  };

  useEffect(() => {
    if(isFavorite){
      console.log('찜하기');
    }
    else{
      console.log('찜하기 취소');
    }
  }, [isFavorite]);

    return(
      <div>
        <button onClick={()=>{setCount(count+1)}}>
           ❤️{count}
        </button>
      </div>
    );
  }

  export default Zzim;