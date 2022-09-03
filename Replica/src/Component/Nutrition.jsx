import React from "react"
import "./Nutrition.css"
import { Container,Row,Col,Card,Button } from 'react-bootstrap';
import Banner from "./Banner"

export default function Nutrition() {
  return (
    <>
        <Banner />
      <div>
        <h1>Don't Think About Food For Your Diet heathy and tasty foods Are Available To Reduce Your Weight</h1>
    <br/>
    <br/>
    <br/>
    <br/>
          <Row>
            <Col className="col-md-4 mt-md-0 mt-3">

            </Col>
            <Col   >
              <Row>
                <Col >
                  <Card className='card'>
          <Card.Img  src= "https://cdn-prod.medicalnewstoday.com/content/images/articles/324/324343/plant-meal.jpg" />
          <Card.Body>
          <Card.Title>  <p> Vegitarian </p> </Card.Title>
            <Card.Text>
            <p> 
A vegetarian diet does not include any meat, poultry, or seafood. It is a meal plan made up of foods that come mostly from plants. These include: Vegetables. Fruits.  </p>
            </Card.Text>   
            </Card.Body>
            </Card>
                </Col>
                <Col>
                  <Card className='card'>
          <Card.Img  src= "https://www.wellthy.care/wp-content/uploads/2017/12/joseph-gonzalez-99034.jpg" />
          <Card.Body>
          <Card.Title>  <p>Non - Vegitarian </p> </Card.Title>
            <Card.Text>
            <p> 
Image result for what is diet non veg recipes
A non-vegetarian diet includes chicken, meat, eggs and fish. A non-vegetarian diet also has several health benefits because this type of food is rich in protein and vitamin B </p>
            </Card.Text>   
            </Card.Body>
            </Card>
                </Col>
                <Col>
                  <Card className='card'>
          <Card.Img src= "https://i.pinimg.com/736x/1c/cc/15/1ccc15e7d699339718d4b17665d43686.jpg" />
          <Card.Body>
          <Card.Title>  <p>Eggetarian </p> </Card.Title>
            <Card.Text>
            <p> An eggetarian is a person who consumes eggs and egg-based products but does not eat meat. A whole egg is a great add-on to a balanced diet – hard-boiled, scrambled, or omelette </p>
            </Card.Text>   
            </Card.Body>
            </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        <br/>
        <br/>
    <Row>
    <Col>
    <img id="colimg" src="https://imgk.timesnownews.com/story/healthy_brunch_foods.jpg?tr=w-1200,h-900"/>
    </Col>
    <Col>
<img id="col2img" src="./burn.png"/>
      <Row>
      <Col><b>Fat 20gm</b> </Col>
      <Col><b>Crabs 300gm</b></Col>
      <Col><b>Protien-35gm</b></Col>
      </Row>
      <br/>
      <br/>
       <Row>
      <Col>
      <h5>200+</h5>
        <h5>Premade recepies</h5>
      </Col>
      <Col>
       <h5>25+</h5>
        <h5>Certified Nutritionist</h5>
      </Col>
      <Col>
       <h5>Unlimited</h5>
        <h5>Tallored Diets</h5>
      </Col>
      </Row>
    </Col>
    </Row>

      </div>
    </>
  )
}