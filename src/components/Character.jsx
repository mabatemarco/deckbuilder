import React from 'react';


const Character = (props) => {
  return (
    <div className="character">
      <img src={props.img} className={props.class} alt="" />
    </div>
  )
}

export default Character;