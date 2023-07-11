import { useState } from "react";

 

export default function TweetBase({ degerler }) {

  const [inputValue, setInputValue] = useState("");
  

// useState(() =>{
 
//   alert("tests")

// },inputValue)


const TweetBaseString = (e) =>{

  
 degerler(inputValue)
  
    }
    const  handleInputChange = (e) =>{

 
      setInputValue(e.target.value)
      
        }


   
  
   return(
<>
<div className="header">
         <h2>Ana Sayfa</h2>
       </div>
 
       <div className="tweet_box">
         <div className="tweet_box-input">
           <img src="images/kuş.jpg" alt="profile image" />
           <input
          type="text"
          placeholder="Nasılsın, Napıyorsun ?"
          value={inputValue}
          onChange={handleInputChange}
        />
           <button onClick={TweetBaseString}>Palavrala</button>
         </div>
       </div>
       </>

   )
} 