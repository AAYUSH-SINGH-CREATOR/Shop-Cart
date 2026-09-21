import { useEffect, useState } from "react";

export default function Home() {
    const [posts, setposts ] = useState([]);
    async function fetchdata() {
        try {
            let output = await fetch("https://fakestoreapi.com/products");
            let data = await output.json();
            setposts(data);
        }
        catch (error) {
            console.log("error aa gya ji");
        }
    }

    console.log(posts);

    useEffect(() => {
        fetchdata();
    }, []);

    return (
       <div className="w-full flex justify-center">
        <div className="w-[80%] min-h-[100%] flex items-center justify-center">
                     <p>this is home page</p>
        </div >
        </div>
    )
}