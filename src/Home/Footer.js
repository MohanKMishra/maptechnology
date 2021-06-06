import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../Home/Style/Footer.css";


const Footer = () => {
    return (
        <div className="footer">
            <marquee>
                <Container>
                    <Row>
                        <Col sm={12} xs={6} md={12} >&copy; Since 2021.MAP Technology</Col>
                    </Row>
                </Container>
            </marquee>
        </div>
    )
}
export default Footer;