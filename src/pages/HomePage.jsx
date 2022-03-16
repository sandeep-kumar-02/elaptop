import Layout from "../components/Layout"
import {collection, getDocs } from "firebase/firestore";
import fireDB from "../fireConfig";
import { useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import '../stylesheets/homepage.css';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function HomePage() {

  const [products, setProducts] = useState([]);
  const {cartItems} = useSelector(state=>state.cartReducer);
  const [loading,setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);


  async function getData() {
    
    try{
    setLoading(true);
    const laptops = await getDocs(collection(fireDB, "laptops"));
    const laptopArray = [];
    laptops.forEach(doc => {
      const obj = {
        id: doc.id,
        ...doc.data()
      }
      laptopArray.push(obj);
      setLoading(false);
    });
    setProducts(laptopArray);
  }catch(error){
    console.log(error)
    setLoading(false);
  }
  }

  useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(cartItems));
  },[cartItems]);

  function addToCart(product) {
    dispatch({
      type: 'ADDTOCART',
      payload: product
    })
  }


  return (
    <Layout loading={loading}>
      <div className="container">
        <div className="row">
          {
            products.map(product => {
              return <div className="col" key={product.id}>
                <div className="product-name">
                  <h5>{product.name}</h5>
                  <img src={product.imageURL} className='product-image' />
                  <p>{product.description}</p>
                </div>
                <div className="product-action">
                  <h2><FaRupeeSign className="rupee" /> {product.price}</h2>
                  <div className="action-buttons">
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                    {/* can also use Link instead of onclick event for following button */}
                    <button onClick={() => {
                      navigate(`/productInfo/${product.id}`)
                    }}>View</button>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </Layout>
  )
}

export default HomePage