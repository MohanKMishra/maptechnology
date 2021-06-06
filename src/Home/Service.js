import React from "react"
import { Row, Col, Container } from "react-bootstrap";
import img1 from "../Assests/img4.jpg";

const Service = () => {
    return (
        <>
            <div className="service">
                <div><h1>OUR SERVICES </h1></div>
                <Container>
                    <Row>
                        <Col sm={6} xs={4} md={3}>Software Installation</Col>
                        <Col sm={6} xs={4} md={3}>Hardware Repairing</Col>
                        <Col sm={6} xs={4} md={3}>Data Backup</Col>
                        <Col sm={6} xs={4} md={3}>Full Pc Assembly</Col>
                        <Col sm={6} xs={4} md={3}>Full Tally Support</Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Service;