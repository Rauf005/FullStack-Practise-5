import React from 'react'
import style from "./style.module.css"
import {Link , NavLink} from "react-router-dom"
import { FaCarSide } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios"
import {Helmet} from "react-helmet";
import { useContext } from 'react';
import { favoriteContext } from '../../Context/FavoriteContext';

function Home(product) {
  let {favorite,setFavorite}=useContext(favoriteContext)
    let [searchQuery, setSearchQuery] = useState('')
    let [products,setProducts]=useState([])
    function getData(){
      axios.get("http://localhost:3000/clothes")
      .then((res)=>{
        setProducts(res.data)
      })
    }
    useEffect(()=>{
       getData()
    },[])
    function handleSearch(event) {
        setSearchQuery(event.target.value)
      }
      const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      
      function handleAddFavorite(product){
        let findFavorite= favorite.find(item=>item._id==product._id)
    
        if(findFavorite){
           alert("Bu mehsul wishlistde movcuddur")
        }else{
           setFavorite([...favorite,product])
           alert("Məhsul wishlistə əlavə edildi")
        }
     }

  return (
    
    
    <div className={style.home}>
        <Helmet>
        <title>Home</title>
        </Helmet>
        <div className={style.hero}>
            
        <div className={style.herotext}>
        <h1>Finding Your <br /> Perfect Shoes</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.  Phasellus at iaculis quam. Integer accumsan <br /> tincidunt fringilla.</p>
        <button>Shop Now</button>
        </div>
        </div>
        <div className={style.services}>
        <div className={style.service}>
            <h2><span><FaCarSide/></span> Free Shipping</h2> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            
            </div>
            <div className={style.service}>
            <h2><span><IoReload/></span>Free Returns</h2> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            
            </div>
            <div className={style.service}>
            <h2><span><FaQuestionCircle/></span> Customer Support</h2> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            
            </div>
        </div>
<div className={style.collects}>

<div className={style.collect}>
<img src="	https://preview.colorlib.com/theme/shoppers/images/women.jpg" alt="" />
<div className={style.coltext}>
<p>Collections</p>
<h3>Woman</h3>
</div>
</div>
<div className={style.collect}>
<img src="		https://preview.colorlib.com/theme/shoppers/images/children.jpg" alt="" />
<div className={style.coltext}>
<p>Collections</p>
<h3>Children</h3>
</div>
</div>
<div className={style.collect}>
<img src="	https://preview.colorlib.com/theme/shoppers/images/men.jpg" alt="" />
<div className={style.coltext}>
<p>Collections</p>
<h3>Man</h3>
</div>
</div>
</div>
<div className={style.dr}>
<div className={style.featured}>
<hr />
    <h1>Featured Products</h1>
    <form action="">
          <input style={{marginBottom:"10%"}} value={searchQuery}  onChange={handleSearch} className={style.search} type="text" placeholder='Search'/>
        </form>
<div className={style.products}>

    { filteredProducts.map(product=>(
        <div className={style.product}>
 <img src={product.image} key={product._id} alt="" />
 
<div className={style.text}> 
<span className={style.heart} onClick={()=>handleAddFavorite(product)}><FaHeart /></span>
<h2>{product.name}</h2>
 <p>{product.description}</p>
 <span>{product.price}$</span></div>
 
</div>
    ))
 
    }
   
</div>
</div>
</div>
    </div>
  )
}

export default Home