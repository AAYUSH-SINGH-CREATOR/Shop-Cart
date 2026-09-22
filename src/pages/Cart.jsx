
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";

export default function Cart() {

    const cart = useSelector((state)=>state.cart);
                     
    return (
        <div className="w-full flex justify-center mt-25 ">
            {    
                cart.length > 0 ?
                    (
                        <div className="flex gap-10 w-[100%] justify-center items-center">
                            <div className="flex flex-col gap-10 justify-center border items-center w-[50%] "> 
                                {
                    cart.map((item, index)=>(
                                <CartItem items={item} key={item.id} />
                                ))
                            }
                            </div>

                            <div className="flex flex-col gap-10 border p-10 h-full justify-between">
                                <div>
                                    <p className="mt-10 text-lg font-bold text-green-700">YOUR CART</p>
                                    <p className="text-5xl font-bold text-green-700 mt-1">SUMMARY</p>
                                    <div className="text-xl font-bold capitalize text-gray-600 mt-2">
                                        total items: {
                                            cart.length
                                        }
                                    </div>
                                </div>

                                <div>
                                    <p className="font-bold text-xl text-gray-500">
                                       Total Amount :{" "}
                                       <span className="font-extrabold text-black">
                                            ${cart.reduce((acc, curr)=>acc+curr.price, 0)}
                                        </span> 
                                
                                    </p>
                                    <button className="w-full border mt-8 p-3 bg-green-500 rounded-xl font-bold text-white text-xl border-green-500 hover:bg-white hover:text-green-800 duration-500 ">
                                        Checkout Now
                                    </button>
                                </div>

                            </div>
     
                        </div>
                    ) :
                    <div className="flex items-center justify-center flex-col mt-20">
                        <p className="text-xl text-bold">Your cart is empty!</p>
                        <NavLink to="/" className="bg-green-500 font-bold p-4 rounded-4xl border border-green-400 text-white hover:bg-white hover:text-gray-500 duration-500 ">
                            SHOP NOW
                        </NavLink>
                      
                    </div>

            }
        </div>
    )
}