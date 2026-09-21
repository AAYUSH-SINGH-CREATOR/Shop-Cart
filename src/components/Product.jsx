
export default function Product({post}){
    const addtocart=()=>{
     console.log("added")
    }

    const removefromcart = () =>{
     console.log("removed");
    }

    return(
        <div className="group border border-transparent shadow-2xl shadow-gray-600 hover:scale-110 rounded-3xl flex flex-col justify-between items-center w-80  p-7 gap-3 mt-7 transition-all duration-500 ">
            <div>
                <p className="font-bold text-xl">{post.title.slice(0, 17)}...</p>
            </div>
            <div>
                <p>{post.description.slice(0,51)}...</p>
            </div>
            <div className="w-[80%]">
                <img src={post.image} alt="" />
            </div>
            <div className="flex items-center gap-18 mt-2">
                <div className="text-green-500 font-bold">
                    <p>${post.price}</p>
                </div>
                <div className="flex items-center">
                   <p className="border p-2 rounded-4xl group-hover:bg-gray-700 group-hover:text-amber-50 transition-all duration-500">
 <button onClick={removefromcart}>remove item</button> : <button onClick={addtocart}>Add to Cart</button>
                   </p>
                </div>
            </div>

        </div>
    )
}