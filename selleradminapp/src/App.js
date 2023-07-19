import React,{useState} from 'react';
import './App.css';
import SellerAdminPageForm from './SellerAdminPageForm';
import ShowProductOnScreen from './ShowProductOnScreen';

function App() {
  const [enterdData,setEnteredData]=useState([])
  const addProductDataHandler=(p_id,p_price,p_name)=>{
      setEnteredData((prevData)=>{
        return[
          ...prevData,
          {idofP:p_id, price:p_price,name:p_name,id:Math.random().toString()}
        ]
      })

  }
  return (
    <div className="App">
      <div className='heading'>
        <h2>Seller Admin Page</h2>
      </div>
      <SellerAdminPageForm onAddProduct={addProductDataHandler}/>
       <ShowProductOnScreen productData={enterdData} 
 />
    </div>
  );
}

export default App;
