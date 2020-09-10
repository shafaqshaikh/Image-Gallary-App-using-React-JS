import React , {useState , useEffect} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from './Loader'
import axios from 'axios'


const Flower = () =>{
	  const [flower , setFlower] = useState([])

	 const fetchImages1 =()=>{
   const apiRoot = "https://api.unsplash.com"
    axios.get(`${apiRoot}/collections/1580860/photos/?client_id=XULnivD22sQAt_bxF8LzpRzhvnLZS-S2wY0WJr5-N3U`)
    .then((response)=>{
      setFlower([...flower , ...response.data])
    })
}




  useEffect(()=>{
   fetchImages1()
  } , [])
    


	return(


	  <InfiniteScroll
      dataLength = {flower.length}
      next={fetchImages1}
      hasMore={true}
      loader={<Loader/>}

      >
      
      <div className="wrapperImage">
     
      {
        flower.map(pic1 => {
        return (
          <img  src={pic1.urls.thumb} key={pic1.id} />
          )

        })
      }
      
      </div>
      </InfiniteScroll>



		)
}

export default Flower