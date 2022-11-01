
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import styled from 'styled-components';
import Header from '../../components/banner/Header';




const Winter = () => {

  const [productInfo, setProdInfo]= useState(JSON.parse(localStorage.getItem("prodList")));
  const [coloursInfo, setColoursInfo]= useState(JSON.parse(localStorage.getItem("coloursList")));
  useEffect(() => {

   
      let tempArray = []
      productInfo.map((data, inde)=>{
        tempArray.push(data)
      });
  
      const result = tempArray.filter(product =>product.brandCategory === "Winter");
      setProdInfo(result)
        console.log('Result'+result);
      
    
  }, [productInfo]);

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
      <div key={index}>
        <img src={productInfo.image} alt="product"></img>
        <h3>{productInfo.prodDescription}</h3>
        <h3>{productInfo.prodName}</h3>

         {/* new */}
         {coloursInfo.map((coloursInfo,ind)=>{
      console.log(coloursInfo.price)
      return(
      <div key={ind}>
        
        <h3>{coloursInfo.price}</h3>
        
      </div>)
})}



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




