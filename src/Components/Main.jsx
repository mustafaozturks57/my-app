
import { useState } from "react";
import Agenda from "./Agenda";
 import Navbar  from "./Navbar";
 import TweetPost from "./TweetPost";
import TweetBase from "./TweetBase";
import DialogComponent from "./DialogComponent";
export default function Main(){

   const [deger,setDeger] = useState([])

   const [userName,SetuserName] = useState("")
 


   const HandlerName = (e) =>{


   SetuserName(e)
      
   
    }

 const CaseTweet = (e) =>{

   var   BasePush = {desc:e , name:userName } 
  
   setDeger((prevDeger) => [...prevDeger, BasePush]);

 }
   
return(
<>
{/* <Navbar degerler={deger}></Navbar> */}

<div className="container-fluid">
   <div className="row">
<div className="col-md-3"> <Agenda /> </div>
<div className="col-md-6"><DialogComponent name={HandlerName}  propsdeger="true"></DialogComponent> <TweetBase degerler={CaseTweet} > </TweetBase> <br></br>  <TweetPost post={deger}></TweetPost> </div>
<div className="col-md-3"><Navbar></Navbar>  </div>

   </div>

</div>

</>

)

}