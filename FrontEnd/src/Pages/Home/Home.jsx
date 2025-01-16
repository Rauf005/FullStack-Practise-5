import React from 'react'
import style from "./style.module.css"
import {Link , NavLink} from "react-router-dom"
import { FaCarSide } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios"

function Home() {

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
  

  return (
    <div className={style.home}>
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
<div className={style.products}>
   
    { products.map(product=>(
        <div className={style.product}>
 <img src={product.image} key={product._id} alt="" />
<div className={style.text}> 
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