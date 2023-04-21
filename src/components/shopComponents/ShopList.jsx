import React from 'react'

function ProductsList({products}) {
  return (
    <div>
      {products.map((pObj) => (<Card key={pObj.id}>
        <img src={pObj.thumbnail} alt={pObj.title} />
        <title>{pObj.title}</title>
        <p>{pObj.description}</p>
        <h4>{pObj.price}</h4>
        <p>{pObj.rating}</p>
        <p>{pObj.brand}</p>
        <p>{pObj.category}</p>
      </Card>))}
    </div>
  )
}

export default ProductsList