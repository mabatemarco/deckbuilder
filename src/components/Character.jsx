import React from 'react';


const Character = (props) => {
  return (
    <div className="character">
      <img src={props.img} alt=""/>
    </div>
  )
}

export default Character;