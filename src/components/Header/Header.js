import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPhone } from "react-icons/fa";

// import Container from 'react-bootstrap/esm/Container';

const Header = () => {
    return (
        <Navbar bg="" expand="lg">
            <Container>
                <img src="	https://bdesh.bdjobs.com/images/logo_bdesh.svg" alt="" width={'170px'} className='ms-0' />
                <img src="https://bdesh.bdjobs.com/images/Joint_venture.png" alt="" className='mx-auto' />
                <div><FaPhone /><span className='ms-1'> যোগাযোগ</span></div>
            </Container>
        </Navbar>
    );
};

export default Header;