import React, { useState, useEffect } from "react"
import "./Gym.css";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Banner from "./Banner"

export default function Gym() {
  const [state, setState] = useState([]);
  const [gym, setGym] = useState();
  const [location, setLocation] = useState();
  const [locat, setLocat] = useState();

  useEffect(function() {

    fetch('https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231')
      .then(response => response.json())
      .then(data => setState(data.data))

  }, [])
  console.log(state)
  const selectloc = (ele, locat) => {
    if (locat) {
     return    ele.city.toLowerCase().includes(locat.toLowerCase());
    } else return ele;
  };
  const forlocation = (ele, location) => {
    if (location) {
      return ele.city.toLowerCase().includes(location.toLowerCase());
    } else return ele;
  };
const forgym = (ele, gym) => {
    if (gym) {
      return ele.gym_name.toLowerCase().includes(gym.toLowerCase());
    } else return ele;
  };
  const filterdata = (state, gym, location , locat ) => {
    return state
      .filter(ele => selectloc(ele, locat))
      .filter(ele => forlocation(ele, location))
      .filter(ele => forgym(ele, gym));
  };
  const Showadd=()=>{
  document.getElementById("show").style.display = "block"

} 
  const confirm=()=>{
 alert("successfully Book")

} 
  return (
    <>
        <Banner />
      <br/>
      <br/>
      <div>
        <input className="mainin" placeholder="Search Gym Name Here..." type="search" onChange={(ele) => { setGym(ele.target.value); }} />
         <button className="button" onClick={Showadd}><b>Search</b></button>
        <br />
        <br />
        <br />
        <div>
          <Row>
            <Col className="col-md-4 mt-md-0 mt-3">
              <lable> <b> Location </b> </lable>
              <br />
              <input type="search" placeholder="Location" onChange={(ele) => { setLocation(ele.target.value); }} />
               <button className="button" onClick={Showadd} style={{width:"50px"}}>🔍</button>
              <br />
              <br />
              <lable> <b>Price  </b> </lable>
              <br />
              <input placeholder="Min" style={{ width: "80px", marginRight: "1rem" }} />

              <input placeholder="Max" style={{ width: "80px" }} />
              <br />
              <br />
              <lable> <b> Cities </b> </lable>
              <br />
               <input onChange={e => setLocat(e.target.value)} type="search" placeholder="Cities"/>
              <button className="button" onClick={Showadd} style={{width:"50px"}}>🔍</button>
              <br />
              <div style={{display: "none"}} id="show">
                <h2>Location</h2>
                <div>
         {filterdata(state, gym, location , locat).map(ele => (
        <div key={ele.id} >
          {ele.address1},{ele.address2}
        </div>
      ))}
                </div>

              </div>
            </Col>
            <Col>
                <div>
                  {
                    state.map((ele,i)=>{
                      return <div key={i} className="maincar">
                      <h1>{ele.category_name
}</h1>
                        <p>{ele.description
}</p>
                        <p>{ele.rating}</p>
                        <p>{ele.distance_text}</p>
                        <p>{ele.duration_text}</p>
                        <button onClick={confirm}>Book Now</button>
                        <br/>
                        <br/>
                        <br/>
                      </div>
                    })
                  }
                </div>
              
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}