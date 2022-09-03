import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Banner.css";

export default function Banner(){
  return (
    <div id="div">
      <Row>
        <Col> 
          <div className='text' >
  <h2>If you want something you've never had, you must be willing to do something you've never done.</h2>
    </div>
       
        </Col>
        <Col>
         
       <img className="img" src="https://www.healthifyme.com/blog/wp-content/uploads/2020/01/gym-diet-cover-1.jpg"/>
          </Col>
      </Row>
    </div>
   
  )
}