import { useDispatch } from "react-redux"
import { remove } from "../redux/slice/CartSlice"
import { MdDelete } from "react-icons/md";


export default function CartItem({items}){
    const dispatch = useDispatch();
    return(
        <div className="flex border-b-2 gap-5 justify-around items-center">
            <div className="w-[40%]">
                <img src={items.image} alt="" />
            </div>
            <div className="w-[80%] p-10 text-gray-700">
                <p className="text-xl font-bold">
                    {items.title}
                </p>
                <p className="text-sm mt-3">
                    {items.description.slice(0,108)}...
                </p>

                <div className="flex items-center gap-18 mt-2">
                    <p className="text-green-500 font-bold ">${items.price}</p>
                    <button onClick={()=>{dispatch(remove(items.id))}}  className="p-1 rounded-full bg-red-400/30"><MdDelete className="text-2xl text-red-500"/>
</button>
                </div>
            </div>
        </div>
    )
}