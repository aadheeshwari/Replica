import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Aboutus.css"

export default function AboutUS(){
  return(
    <>
      
      <div>
        <br/>
      <br/>
      <img id="aboimg"src="https://images.assetsdelivery.com/compings_v2/mamun25g/mamun25g2202/mamun25g220215396.jpg" />
<br/>
<br/>
<br/>
<Row>
<Col>
<h3>Our Vision</h3>
  <p><b>Our vision is not only to create a cutting-edge , dynamic fitness chain across india , but we also intend to deliver a simple and healthy Lifestyle for a common man , and that too on a budget</b></p>
</Col>
<Col>
<h3>Core Values</h3>
  <p><b>Our core values on providing quality Health and Fitness services that are recommended and prefered by the mass</b></p>
</Col>
<Col>
<h3>Our Mission</h3>
  <p><b>We aim to build an end to end User Experience driven by technology -right from discovery to accede to the realization of a standardized fitness experience</b></p>
</Col>
</Row>
        <br/>
        <br/>
        <br/>
        <h1>Our tech will help our partners in</h1>
        <br/>
     <Row>
     <Col>
     <img className="logimg" src='https://cdn-icons-png.flaticon.com/512/8188/8188120.png'/>
       <p><b>Maximizing Revenue for Maximizing Revenue</b></p>
     </Col>
       <Col>
       <img className="logimg" src="https://cdn-icons-png.flaticon.com/512/619/619714.png"/>
         <p><b>Reaching more Members/Users & Optimize the Experience</b></p>
       </Col>
       <Col>
       <img className="logimg" src="https://cdn-icons-png.flaticon.com/512/3059/3059997.png"/>
         <p><b>Hassle - Free Operations</b></p>
       </Col>
     </Row>
        <br/>
        <br/>
        
        <Row>
        <Col>
          <img className="logimg" src="https://cdn-icons-png.flaticon.com/512/5629/5629363.png"/>
          <p><b>building a brand loved by both fitness enthusiasts & Fitness dwellera</b></p>
        </Col>
        <Col><img className="logimg" src="https://cdn-icons-png.flaticon.com/512/1826/1826851.png"/>
          <p><b>Bulding An online presence across channels</b></p></Col>
        </Row>
      </div>
    </>
  )
}