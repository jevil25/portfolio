import React from 'react';
import "../css/Loader.css";
const loadPic = require("../Images/loadernew.png")

function Loader() {

  return (
	<div className='Loader'>
		<img src={loadPic} alt="animation" />
	</div>
  )
}

export default Loader
