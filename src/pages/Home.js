import React from 'react'
import './nav.css';
import n from '../images/n.jpg';
import shoes from '../images/shoes.jpg';
import shirt from "../images/shirt.jpg";
import watch7 from "../images/watch7.jpg";
import dress from "../images/dress.jpg";
import glasses from "../images/glasses.jpg";
import parse5 from "../images/parse5.jpg";
import sandel from "../images/sandel.jpg";
import top from "../images/top.jpg";
import Footer from './Footer';

const Home = () => {
  return (
    <div>
    <div className="pic">
      <h3 className="subtitle">Upadte Your Style with Online Shopping.</h3>
      <h3 className="title">Discover The Trend & Save UP To 20%.</h3>
      </div>
      <div className="box">
        <img src={n} className="img" alt=""/>
        <div className="text-box"> 
        <h2>About</h2>
        <h2 style={{color:"darkblue"}}>Our Shop</h2>
        <hr/>
        <p>There are many variation of passages of loern lpsum avialable. but the majority have suffered alternation
          in some form, by injected humour, or randomised words which don't look even slightly believable.
          if you are going to use a passage of lorem ipsum.You need to be sure there isn't anything embarrassing 
          hidden in the middle of text.
          </p>
          <h5>You are intrested in shopping and Visit this website.So first you are registerd.and click here..</h5>
          <button>Register</button>
        </div>
      </div>
      <div className="heading-box">
      <h1>FEATURED PRODUCTS</h1>
        <h3>FEATURED <span style={{color:'darkblue'}}>LATEST</span> SPECIAL</h3>
        </div>
      <div className="img-box">
        <img src={shirt} className="img1" alt=""/>
        <img src={shoes} className="img1" alt=""/>
        <img src={watch7} className="img1" alt=""/>
        <img src={dress} className="img1" alt=""/>
        <img src={glasses} className="img1" alt=""/>
        <img src={parse5} className="img1" alt=""/>
        <img src={sandel} className="img1" alt=""/>
        <img src={top} className="img1" alt=""/>
      </div>
      <Footer/>
    </div>
  )
}
 
export default Home;
