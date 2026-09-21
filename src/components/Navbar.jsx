import { NavLink } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.png";


export default function Navbar(){

    return(
        <div className="w-full bg-[#0F172A] text-white flex justify-center items-center p-3">
            <div className="min-w-[64%] flex justify-between items-center">
                <div>
                    <NavLink to="/">
                        <img src={logo} className="w-40"/>
                    </NavLink>
                </div>
                
                <div className="flex justify-center items-center gap-2 lg-gap-10">
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/cart">
                         <FaShoppingCart className="text-2xl"/>

                    </NavLink>
                </div>
            </div>
        </div>
    )
}