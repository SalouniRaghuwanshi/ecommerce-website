import React from 'react'
import './nav.css';
import n from '../images/n.jpg';
import shoes from '../images/shoes.jpg';
import shirt from "../images/shirt.jpg";
import thing from "../images/thing.jpg";
const Home = () => {
  return (
    <div>
    <div className="pic">
      <h3 className="subtitle">Upadte Your Style with Online Shopping.</h3>
      <h3 className="title">Discover The Trend & Save UP To 20%.</h3>
      </div>
      <div className="box">
        <img src={n} className="img"/>
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
      <div>
      <h1>FEATURED PRODUCTS</h1>
        <h3>FEATURED LATEST SPECIAL</h3>
      <div className="img-box">
        <img src={shirt} className="img1"/>
        <img src={shoes} className="img1"/>
        <img src={thing} className="img1"/>
      </div>
      </div>
    </div>
  )
}
 
export default Home;
