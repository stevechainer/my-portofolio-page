import React from 'react'
import Particle from '../../Particle'
import { Container } from "react-bootstrap";

export default function ComingSoon() {
    return (
        <section className="home-section">
            <Container fluid id="resume" >
                <Particle />
                <Container className="home-content d-flex justify-content-center align-items-center comingsoonclass">

                <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_10jxod3a.json"  background="transparent"  speed="1"  style={{width: '80%', height: '100%'}}  loop  autoplay></lottie-player>
                </Container>
            </Container>
        </section>
    )
}
