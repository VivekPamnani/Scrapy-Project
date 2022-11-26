import React, { Component } from 'react';
import axios from 'axios';
import queryString from "query-string";
import Navbar from "./navbar.component";
import Image from 'react-bootstrap/Image';
// import { Container, Row, Col } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import back from './PmdesY.png';

export default class StartupProfile extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            startupname: "",
            site: "",
            city: "",
            founding_date: "",
            employees: 0,
            twitter_handle: "",
            twitter: "https://www.twitter.com/",
            twitter_followers: "",
            facebook: "",
            linkedin: "",
            founders: {}
        }
        // this.onViewdetails = this.onViewdetails.bind(this);

    }
    componentDidMount() {
        document.body.style.background = '#aaa'
        axios.get('http://localhost:4000/blank')
            .then(response => {
                console.log("response:", response)
                this.setState({ 
                    // result: response.data.body,
                    // searchval: response.data.val,
                    username: "",
                    startupname: "Startup Name",
                    site: "",
                    city: "",
                    founding_date: "",
                    employees: 0,
                    twitter_handle: "",
                    twitter: "https://www.twitter.com/",
                    twitter_followers: "",
                    facebook: "",
                    linkedin: "",
                    founders: {}
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        return (
            <div className="container container-fluid">
                <Navbar />    
                <nr />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Container className="text-center">
                    <Row>
                        <Col md="4">
                        <img src={back} className="img-fluid rounded" />
                        </Col>
                        <Col>
                            <Row className="justify-content-start">
                                {/* <Col className="text-left"> */}
                                    <Col className="text-left col-md-auto col">
                                        Facebook-icon
                                    </Col>
                                    <Col className="text-left col-md-auto">
                                        Twitter-icon
                                    </Col>
                                    <Col className="text-left col-md-auto">
                                        LinkedIn-icon
                                    </Col>
                                {/* </Col> */}
                            </Row>
                            <Row>
                                <Col>
                                    date <br/>
                                    Founding Date
                                </Col>
                                {/* <Col xs={6} md={4}> </Col>*/}
                                <Col>
                                    count <br/>
                                    Employees
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    place <br/>
                                    Location
                                </Col>
                                {/* <Col xs={6} md={4}> </Col>*/}
                                <Col>
                                    count <br/>
                                    Employees
                                </Col>
                            </Row>                            
                            <Row>
                                <Col className="text-left">
                                    Founders:
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            {/* <p>{this.state.startupname}</p> */}
                            <p className="h">{this.state.startupname}</p>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <Row className="justify-content-start">
                        <p className="h4">Contacts/Founders</p>
                    </Row>
                </Container>
            </div> 
        )
    }
}
