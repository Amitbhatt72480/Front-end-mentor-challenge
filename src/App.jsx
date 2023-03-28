import React, { useState } from 'react'
import Cart from '../Imp/images/icon-cart.svg'
import Acc from '../Imp/images/image-avatar.png'
import Product1 from '../Imp/images/image-product-1.jpg';
import Product2 from '../Imp/images/image-product-2.jpg';
import Product3 from '../Imp/images/image-product-3.jpg';
import Product4 from '../Imp/images/image-product-4.jpg';
import thumb1 from '../Imp/images/thumb1.jpg'
import thumb2 from '../Imp/images/thumb2.jpg'
import thumb3 from '../Imp/images/thumb3.jpg'
import thumb4 from '../Imp/images/thumb4.jpg'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'


const App = () => {

  const [Quantity, setQuantity] = useState(0)
  const [product, setProduct] = useState(Product1);
  const [cart, setCart] = useState(0)
  const [openCart, setOpenCart] = useState(false)

  const quantityTriggerinc = () => {
    setQuantity(prev => {
      return prev + 1
    })
  }
  const quantityTriggerdec = () => {
    setQuantity(prev => {
      if (prev === 0) {
        return 0
      }
      return prev - 1
    })
  }

  const addtoCart = () => {
    setCart(Quantity)
  }

  const emptyCart = () => {
    setQuantity(0)
    setCart(Quantity)
  }

  return (
    <>
      <div className="relative flex items-center justify-between p-5 font-custom mx-20 border-b-2">
        <div className="flex items-center">
          <div className="font-bold text-3xl cursor-pointer">sneakers</div>
          <div className="ml-16 items-center">
            <ul className="flex space-x-10 text-md  mt-2">
              <li className="text-n-Grayishblue hover:text-black cursor-pointer hover:border-b-2 hover:border-p-orange">Collection</li>
              <li className="text-n-Grayishblue hover:text-black cursor-pointer hover:border-b-2 hover:border-p-orange">Men</li>
              <li className="text-n-Grayishblue hover:text-black cursor-pointer hover:border-b-2 hover:border-p-orange">Women</li>
              <li className="text-n-Grayishblue hover:text-black cursor-pointer hover:border-b-2 hover:border-p-orange">About</li>
              <li className="text-n-Grayishblue hover:text-black cursor-pointer hover:border-b-2 hover:border-p-orange">Contact</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <div className="px-10 text-xl">
            <img onClick={() => { setOpenCart((prev) => { return !prev }) }} src={Cart} className="w-7 hover:w-8 cursor-pointer" alt="" />
          </div>
          <div className="">
            <img className='w-12 border-2 cursor-pointer hover:border-p-orange rounded-full' src={Acc} alt="" />
          </div>
        </div>
      </div>

      {openCart && <div className="absolute right-4 top-20 bg-white shadow-2xl rounded-2xl border-2 w-[370px] h-[300px]">
        <h1 className="p-4 font-bold text-2xl border-b">Cart</h1>
        {(cart === 0) ? <h1 className='text-center py-20 font-bold text-xl text-n-Darkgrayishblue'>Your cart is empty</h1> :
          <div className='py-12 mx-3'>
            <div className="grid grid-cols-2">
              <div className="">
                <img src={thumb1} className="w-20 rounded-xl" alt="" />
              </div>
              <div className="-ml-16">
                <h1 className=" text-n-DarkGrayishblue tracking-wider">Fall Limited Edition Sneakers</h1>
                <p className="text-xs ">$125.00 X {Quantity}</p>
                <div className="flex ">
                  <h1 className="font-bold text-xl">${Quantity * 125}.00</h1>
                  <button onClick={emptyCart} className="tracking-wider bg-p-orange text-white px-3 py-1 rounded-xl shadow-xl ml-4 font-bold text-sm ">Empty Cart</button>
                </div>
              </div>
            </div>
            <button className="mt-4 flex mx-auto px-32 rounded-2xl font-bold tracking-widest py-2 bg-p-orange text-white ">Checkout</button>
          </div>
        }
      </div>}

      <div className="grid grid-cols-2 pt-16 mx-40">
        <div className="">
          <img src={product} className="w-[70%] rounded-3xl " alt="" />
          <div className="flex">
            <img onClick={() => { setProduct(Product1) }} src={thumb1} className="w-[5.5rem] mx-2 hover:bg-white/80 hover:opacity-60  rounded-2xl mt-4" alt="" />
            <img onClick={() => { setProduct(Product2) }} src={thumb2} className="w-[5.5rem] mx-2 hover:bg-white/80 hover:opacity-60  rounded-2xl mt-4" alt="" />
            <img onClick={() => { setProduct(Product3) }} src={thumb3} className="w-[5.5rem] mx-2 hover:bg-white/80 hover:opacity-60  rounded-2xl mt-4" alt="" />
            <img onClick={() => { setProduct(Product4) }} src={thumb4} className="w-[5.5rem] mx-2 hover:bg-white/80 hover:opacity-60  rounded-2xl mt-4" alt="" />
          </div>
        </div>
        <div className="">
          <div className="">
            <p className="text-sm tracking-widest text-p-orange py-4">SNEAKER COMPANY</p>
            <h1 className="text-6xl text-n-Verydarkblue font-bold pb-8">Fall Limited <span className='block'>Sneakers</span></h1>
            <p className="text-md text-n-Darkgrayishblue pb-7">These low-profile sneakers are your perfect casual wear companion. <span className='block'>Featuring a durable rubber outer sole, they'll withstand everything <span className='block'>the weather can offer.</span></span> </p>
            <div className="flex">
              <h1 className="text-3xl font-bold mr-5">$125.00</h1>
              <h1 className="bg-p-paleorange text-p-orange font-bold text-md items-center rounded-xl px-2 py-1">50%</h1>
            </div>
            <p className="text-n-Darkgrayishblue mt-3 line-through">$250.00</p>

            <div className=" mt-8 flex">
              <div className="flex items-center bg-n-Lightgrayishblue px-5 py-2 rounded-xl">
                <AiOutlineMinus onClick={quantityTriggerdec} className='hover:bg-n-Grayishblue rounded-xl ' size={30} />
                <h1 className="text-3xl ml-7 mr-7">{Quantity}</h1>
                <AiOutlinePlus onClick={quantityTriggerinc} className='hover:bg-n-Grayishblue rounded-xl ' size={30} />
              </div>
              <button onClick={addtoCart} className="bg-p-orange px-10 hover:bg-p-paleorange hover:text-black ml-10 py-3 rounded-xl text-white ">Add to Cart</button>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default App