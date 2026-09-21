import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

export default function Home() {
    const [posts, setposts] = useState([]);
    const [loading, setLoading] = useState(false);
    async function fetchdata() {
        setLoading(true)
        try {
            let output = await fetch("https://fakestoreapi.com/products");
            let data = await output.json();
            setposts(data);
        }
        catch (error) {
            console.log("error aa gya ji");
        }
        setLoading(false);
    }

    console.log(posts);

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div className="w-full flex justify-center">
            <div className="w-[80%] min-h-[100%] flex items-center justify-center">
                {
                    loading ? <Spinner /> : posts.length > 0 ? (
                <div className="w-[100%] flex flex-wrap justify-center gap-5  m-4 mt-12">
                    {
                        posts.map((post) => (
                            <Product key={post.id} post={post} />
                        ))
                    }
                </div>
                ) : <p>post not found</p>
            }

            </div >
        </div>
    )
}