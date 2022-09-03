import React , {useState,useEffect} from "react";
import "./Fitness.css"
import Banner from "./Banner";
import { Container,Row,Col,Card,Button } from 'react-bootstrap';

export default function Fitness(){
   
  return(
    
    <div>
  <Banner />
    <br/>
<Row>
  <Col>
    <p><b>WTF Powered gyms are top class infrastructure and Modern machinery at your regular gym membership</b></p>
  <img className="fitimg" src=
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/treadmill-testing-0438-1585840395.jpg'/>
  </Col>
  <Col>
  <img src="https://cdn-icons-png.flaticon.com/512/3925/3925153.png"/>
    <h1 style={{marginLeft:"50%"}}>Gym(WorkOut)</h1>
  </Col>
</Row>
    <Row>
  <Col>
  <img src="https://cdn-icons-png.flaticon.com/512/3925/3925158.png"/>
    <h1 style={{marginRight:"60%"}}>Studios</h1>
  </Col>
  <Col><img className="fitimg" src=
    'https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/03/female-battle-rope-1296-728-header.jpg?w=1155&h=1528'/>
  <p><b>our WTF studios are not just about Dance ,Zumb & Pilate classes</b></p>
  </Col>
</Row>
      <hr></hr>
      <h1>Diet Plans Are Expansive . Who Said?</h1>
      <p><b>Get personalised diet palns as per your fitness goals from certified dieticians at affordable price only at WTF</b></p>
      <Row>
      <Col>
      <button style={{marginTop:"25%"}}>Download App Now</button>
      </Col>
      <Col>
      <img id="dietimg" src="https://elmcreekdental.com/wp-content/uploads/2015/05/healthy-foods-good-for-oral-health.jpg"/>
      </Col>
      </Row>
    </div>
  )
}