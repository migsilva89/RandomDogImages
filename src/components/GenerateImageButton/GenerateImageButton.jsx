import React from 'react'

function GenerateImageButton(props) {
  // console.log(props)
  return (
    <div>
      <button onClick={() => console.log(props.requestAPI())}>Get Random Dog Image</button>
    </div>
  )
}

export default GenerateImageButton
