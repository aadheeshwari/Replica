import React from "react";
import "./Footer.css"
import { Container,Row,Col,Card,Button,Nav,Navbar } from 'react-bootstrap';
import {Link} from "react-router-dom"



export default function Footer(){
  return(
    <>
    <footer className="page-footer font-small  pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-3 mt-md-0 mt-3">
               <img className="footimg" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/022c5f7f-9b05-4e81-9ec3-3857f666ac25/d5sbkw3-359bc3a3-1b18-40d7-b175-2f32ccca5599.png/v1/fill/w_325,h_232,strp/wtf_logo__aarem_by_rijulwallpapers_d5sbkw3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjMyIiwicGF0aCI6IlwvZlwvMDIyYzVmN2YtOWIwNS00ZTgxLTllYzMtMzg1N2Y2NjZhYzI1XC9kNXNia3czLTM1OWJjM2EzLTFiMTgtNDBkNy1iMTc1LTJmMzJjY2NhNTU5OS5wbmciLCJ3aWR0aCI6Ijw9MzI1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.svuRbB5N3Jld-_ZFWwO-CR-Vd75vpRTRq-_8FszAr48" /> 
              <Row>
              <Col>
                 <Nav.Link href="Facebook">
              <a 
                href="https://www.facebook.com/wtfupme/" data-rr-ui-event-key="https://www.facebook.com/wtfupme/"><img id="img1" src="https://cdn-icons-png.flaticon.com/512/6507/6507576.png"/> </a>
       
            </Nav.Link>
              </Col>
                <Col>
                  <Nav.Link href="Linkedin">
              <a 
                href="https://www.linkedin.com/company/wtfupme/" data-rr-ui-event-key="https://www.linkedin.com/company/wtfupme/"><img id="img1" src="https://cdn-icons-png.flaticon.com/512/1384/1384072.png"/> </a>
       
            </Nav.Link>
                </Col>
                <Col>
                   <Nav.Link href="insta">
              <a href="https://www.instagram.com/wtfupme/" data-rr-ui-event-key="https://www.instagram.com/wtfupme/"><img id="img1" src="https://cdn-icons-png.flaticon.com/512/3698/3698460.png"/></a>
            </Nav.Link>
                </Col>
              </Row>
            
            </div>
            <hr className="clearfix w-100 d-md-none pb-3"/>
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Quick Links</h5>
              <br/>
              <ul className="list-unstyled">
                <li>
                  <a>about</a>
                </li>
              <br/>
                
                <li>
                  <a>FAOs</a>
                </li>
              <br/>
                
                <li>
                  <a>Privacy Policy</a>
                </li>
              <br/>
                <li>
                  <a>WTF in news</a>
                </li>
              <br/>
                <li>
                  <a>Terms & Condition</a>
                </li>
              <br/>
                <li>
                  <a>Refund & Cancellation</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Explore</h5>
                <ul className="list-unstyled">
                 <br/>
                  <li>
                    <a>Arenas</a>
                  </li>
              <br/>
                  <li>
                    <a>Studios</a>
                  </li>
              <br/>
                  <li>
                    <a>Nutrition</a>
                  </li>
                </ul>
              </div>
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Contact</h5>
                <ul className="list-unstyled">
              <br/>
                  <li>
                    <a>Ro: S1502 Amrapali Silicon City , Sector 76 ,Noida ,Uttra Pradesh ,India</a>
                  </li>
              <br/>
                  <li>
                    <a>Ho:C-86 b,Ground Floor ,Sector8 , Noida ,uttra Pradesh , India </a>
                  </li>
              <br/>
                  <li>
                    <a>
                      📞  +919090639005</a>
                  </li>
                   <br/>
                  <li>
                    <a>✉️    support@wtfup.me</a>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      
      </footer>
    </>
  )
}