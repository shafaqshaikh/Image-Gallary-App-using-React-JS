import React , {useState , useEffect} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from './Loader'
import axios from 'axios'


const Cat = () =>{
	  const [cat , setCat] = useState([])


	 const fetchImages2 =()=>{
   const apiRoot = "https://api.unsplash.com"
    axios.get(`${apiRoot}/collections/139386/photos/?client_id=XULnivD22sQAt_bxF8LzpRzhvnLZS-S2wY0WJr5-N3U`)
    .then((response)=>{
      setCat([...cat , ...response.data])
    })
}




  useEffect(()=>{
   fetchImages2()
  } , [])
    


	return(


	  <InfiniteScroll
      dataLength = {cat.length}
      next={fetchImages2}
      hasMore={true}
      loader={<Loader/>}

      >
      
      <div className="wrapperImage">
    
       {
        cat.map(pic2 => {
        return (
          <img  src={pic2.urls.thumb} key={pic2.id} />
          )

        })
      }
      </div>
      </InfiniteScroll>

		)
}
export default Cat