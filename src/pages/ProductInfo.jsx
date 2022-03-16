import Layout from "../components/Layout";
import { getDoc ,doc } from "firebase/firestore"; 
import fireDB from "../fireConfig";
import {useEffect,useState} from 'react';
import { useParams } from "react-router-dom";
import '../stylesheets/productInfo.css';
import { BsArrowLeft } from "react-icons/bs";
import {Link} from 'react-router-dom';


function ProductInfo() {

  const[product,setProduct] = useState([]);
  const params = useParams();
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    getData();
  },[]);

  async function getData(){
    try{
      setLoading(true);
    const productTemp = await getDoc(doc(fireDB,"laptops", params.productId));
    setProduct(productTemp.data());
    setLoading(false);
  }
catch(error){
  console.log(error);
  setLoading(false);
}
}

  return (
    <Layout loading={loading}>
      {
        product && (<div className="product-template">
          <h2>{product.name}</h2>
          <img src={product.imageURL} /><hr/>
          <p>{product.description}</p>
          <Link to='/'><BsArrowLeft className="arrowLeft" /></Link>
           
        </div>)
      }

    </Layout>
  )
}

export default ProductInfo