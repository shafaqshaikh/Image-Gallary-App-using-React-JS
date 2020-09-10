import React from 'react'
import './App.css';


const UnsplashImage =({url1 , url2 , key1 , key2})=>{
	return(
			
		
		<div>
		<img className="img1" src={url1} key={key1} alt=""  />
		<img className="img2" src={url2} key={key2} alt=""  />

		</div>


		)
}

export default UnsplashImage		