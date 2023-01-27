import React from 'react'
import { useSelector } from 'react-redux'
function Cart() {

  const CartProductlist = useSelector(state => state.CartProductlist)

// let RemoveDuplicatobj=CartProductlist.CartProduc.map()
  console.log(CartProductlist.CartProduc );
  return (
    <>
      <h1>cart</h1>
    </>
  )
}

export default Cart
