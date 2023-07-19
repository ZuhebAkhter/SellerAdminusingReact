import React,{useState} from "react";
import './SellerAdminPageForm.css'

const SellerAdminPageForm = (props) => {
    let TotalPrice;
    let price1=localStorage.getItem('price')
    if(price1===null || 0){
        TotalPrice=0;
    }else{
        TotalPrice=price1;
    }
 const [enteredId,setEnteredId]=useState('');
 const [enteredPrice,setEnteredPrice]=useState('');
 const [enteredName,setEnteredName]=useState('');
  const idChangeHandler=(event)=>{
    setEnteredId(event.target.value)
  }

  const priceChangeHandler=(event)=>{
    setEnteredPrice(event.target.value)
  }
  const nameChangeHandler=(event)=>{
    setEnteredName(event.target.value)
  }
  

  const dataSubmitHandler=(event)=>{
   event.preventDefault();
   props.onAddProduct(enteredId,enteredName,enteredPrice)
   TotalPrice=parseFloat(TotalPrice)+parseFloat(enteredPrice);
  console.log(TotalPrice)
   setEnteredId('')
   setEnteredPrice('')
   setEnteredName('')
   localStorage.setItem('price',TotalPrice)
  }


  return (
    <form className="form" onSubmit={dataSubmitHandler}>
        <label>Product ID:</label><br></br>
        <input type="text" onChange={idChangeHandler}></input>
      <div className="seller-price">
        <label>Selling Price:</label><br></br>
        <input type="number" onChange={priceChangeHandler}></input>
      </div>
      <div className="seller-product">
        <label>Product Name:</label><br></br>
        <input type="text" onChange={nameChangeHandler} ></input>
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default SellerAdminPageForm;
