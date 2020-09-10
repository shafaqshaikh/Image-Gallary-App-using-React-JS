import React , {useState , useEffect} from 'react' 
import './App.css' 
import Heading from './Heading' 
import Cat from './Cat' 
import Flower from './Flower'
import {Tabs , Tab , AppBar} from '@material-ui/core'

function App() {

  const [selecTab , SetSelectTab] = useState(0)
  return (
    <div>
    <Heading/>
      <>
      <AppBar >
      <Tabs value={selecTab} onChange={(event , newVal)=>SetSelectTab(newVal)} aria-label="simple tabs example">
      <Tab label="Flowes Collection" />
      <Tab label="Cat Collections"/>
      </Tabs>
    </AppBar>
    {selecTab===0 ? <Flower/> : null}
    {selecTab===1 ? <Cat/> : null}

    </>      
    </div>
  );
}

export default App;
