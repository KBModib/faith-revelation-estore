import React from 'react';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import styled from 'styled-components';
import Header from '../../components/banner/Header';
import { SummerCard } from './SummerCard';
import Sumdata from './Sumdata';



const Summer = () => {

  const [productInfo, setProdInfo]= useState(JSON.parse(localStorage.getItem("prodList")));

  useEffect(() => {

   
      let tempArray = []
      productInfo.map((data, inde)=>{
        tempArray.push(data)
      });
  
      const result = tempArray.filter(product =>product.brandCategory === "Summer");
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
            Summer
        </h1>
    <div className='App'>
       
    {productInfo.map((productInfo,index)=>{
      console.log(productInfo.prodName)
      return(
      <div key={index}>
        <img src={productInfo.image}></img>
        <h3>{productInfo.prod}</h3>
        <h3>{productInfo.prodName}</h3>
      </div>)
})}
          </div>
    <Footer/>
</Container>

     <Banner>
        <Header/>
    </Banner>
      <h1>Summer</h1>

    </>
  )
}


export default Summer;

const Container = styled.div`
`


const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`
