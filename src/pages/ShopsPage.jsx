import React, { useEffect, useState } from 'react'
import ShopList from '../components/shopComponents/ShopList'

function ShopsPage() {
  const [allProducts, setAllProducts] = useState([]);

  return (
    <div>
      <h1>Shops Page</h1>
      <p>Welocme to ShopsPage</p>
      <ShopList products={[]}/>
    </div>
  )
}

export default ShopsPage