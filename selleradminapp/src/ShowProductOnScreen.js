import React from 'react'

const ShowProductOnScreen = (props) => {
    // console.log(props.productData[1].price)
    let pricetoDisplay=localStorage.getItem('price')
    const deleteHandler = () => {
        // setDeleteText('(Deleted!)');
        props.onDelete(props.id);
      };
  return (
    <div>
        <ul>
        {props.productData.map((product) => (
          <li key={product.id}>
            {product.name} - {product.idofP} - {product.price}
            <button type='delete' onClick={deleteHandler}>Delete</button>
          </li>
        ))}
      </ul>
      <div>Total Worth of products:{pricetoDisplay}</div>
    </div>
  )
}

export default ShowProductOnScreen