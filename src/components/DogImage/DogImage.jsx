import React from 'react' 
import styles from '../DogImage/styles.css'

function DogImage(props) {
  return (
    <div className="top">
      <img
        src={props.imgUrl}
        alt="Dog"
      />
    </div>
  )
}

export default DogImage;
