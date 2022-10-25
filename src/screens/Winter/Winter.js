
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import styled from 'styled-components';
import Header from '../../components/banner/Header';
import Wdata from './Wdata';
import { WinterCard } from './WinterCard';



const Winter = () => {

  const [productInfo, setProdInfo]= useState(JSON.parse(localStorage.getItem("prodList")));

  useEffect(() => {

   
      let tempArray = []
      productInfo.map((data, inde)=>{
        tempArray.push(data)
      });
  
      const result = tempArray.filter(product =>product.brandCategory === "Winter");
      setProdInfo(result)
        console.log('Result'+result);
      
    
  }, []);

  return (
    <>

    <Container>
    <Banner>
        <Header/>
    </Banner>
    <h1>
            Winter
        </h1>
    <div className='App'>
       
    {productInfo.map((productInfo,index)=>{
      console.log(productInfo.prodName)
      return(
      <div>
        <img src={productInfo.image}></img>
        <h3>{productInfo.prodDescription}</h3>
        <h3>{productInfo.prodName}</h3>
      </div>)
})}
          </div>
    <Footer/>
</Container>

     
    </>
  )
}


export default Winter;


const Container = styled.div`
`
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`




