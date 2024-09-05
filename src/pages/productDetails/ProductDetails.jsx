import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch('https://job-task-server-2-self.vercel.app/api/products') // সমস্ত পণ্য ফেচ করা হচ্ছে
            .then(res => res.json())
            .then(data => {
                // ID অনুযায়ী পণ্য ফিল্টার করা হচ্ছে
                const singleProduct = data.find(item => item._id === id);
                setProduct(singleProduct);
                setLoading(false); // Loading শেষ
            })
            .catch(error => {
                console.log("Error fetching product:", error);
                setLoading(false); // Error হলেও লোডিং শেষ হবে
            });
    }, [id]);

    const { name, photoUrl, category, brand, price, description } = product || {};


    if (loading) {
        return <div className="h-screen flex justify-center items-center">
            <p className="text-4xl font-bold text-sky-300">Loading...</p>
        </div>; // লোডিং হলে দেখাবে
    }

    if (!product) {
        return <div className="h-screen flex justify-center items-center">
        <p className="text-4xl font-bold text-red-600">Product Not Found</p>
    </div>;// যদি পণ্য না মিলে
    }

    return (
       <>
       <div className="mt-20">
        <h1 className="text-center font-semibold py-2">Single Product : <span className="text-sky-500">({name})</span></h1>

        <div className="max-w-lg mx-auto  bg-gray-200 rounded-lg shadow-lg dark:bg-gray-800">
            <img className="object-cover w-full h-56" src={photoUrl} alt="avatar" />
            <div className="py-5 text-center">
                <p>
                    Product_Name:
                    <span className="font-bold text-sky-600">{name}</span>
                </p>
                <p>
                    Product_Category:
                    <span className="font-bold text-sky-600">{category}</span>
                </p>
                <p>
                    Product_Brand:
                    <span className="font-bold text-sky-600">{brand}</span>
                </p>
                <p>{description}</p>
                <p>
                    Product_Price:
                    <span className="font-bold text-sky-600">{price}</span>
                </p>
            </div>
        </div>
       </div>
       </>
    );
};

export default ProductDetails;
