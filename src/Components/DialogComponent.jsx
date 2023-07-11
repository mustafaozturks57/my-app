import React, { useEffect, useState } from 'react';
import './DialogComponent.css'

const DialogComponent = (props) => {

   const {propsdeger,name} = props;


  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('');
  
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleName = (e) =>{
    name(text)
    handleClose();

  }

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleInputChange = (event) => {
   setText(event.target.value);
 };
  
useEffect(()=>{
   if(propsdeger ==="true"){
      setIsOpen(true);
   }

},[])



  return (
    <div>
      
      {isOpen && (
        <div className="dialog-overlay">
          <div className="dialog-card">
            <div className='dialog-header'>
            <h4>İsim Belirle</h4>
            </div>
            <input
        type="text"
        value={text}
        onChange={handleInputChange}
        className={text ?  'inputsuccess': 'inputdefault'}
      /><br></br>
            <button classname='' onClick={handleClose}>Kapat</button>
            <button className='' onClick={handleName}>Kaydet</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DialogComponent;
