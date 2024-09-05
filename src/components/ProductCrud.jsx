import { useNavigate} from "react-router-dom";


const ProductCrud = ({singleProduct}) => {
    const {_id ,name, photoUrl, category, brand, price, description } = singleProduct || {};
    const navigate = useNavigate();


    const handleDetails = (id) =>{
  navigate(`product-details/${id}`)
    }
    return (
        <>
        <div className="w-full  bg-gray-200 rounded-lg shadow-lg dark:bg-gray-800">
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
            <div>
              <button 
              onClick={()=>handleDetails(_id)}
              className="bg-gray-400 py-2 px-6 rounded-full font-semibold text-white my-2">View Details</button>
            </div>
          </div>
        </div>
      </>
    );
};

export default ProductCrud;