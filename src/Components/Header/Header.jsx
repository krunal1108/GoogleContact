import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './header.css'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router'
import { FiPlus } from 'react-icons/fi';
import { IoMdContact } from "react-icons/io";
import { FaBars } from "react-icons/fa6";



function Header() {
    const navigate =useNavigate()
   const handleToAdd = ()=>{
    navigate('/Form')
   }
    return (
        <>
            <div className="header ">
                <Container fluid >
                    <Row className='align-items-center'>
                        <div className="col-2">
                            <div className='fs-2 t6ext-dark'>
                            <FaBars />
                            <IoMdContact />

                            <span style={{color:"grey"}}>Contacts</span>
                            </div>
                        </div>
                        <div className="col-7 d-flex justify-content-center ">
                            <div className=''>
                                <div className="d-flex">
                                    <div className="wrap">
                                        <div class="search">
                                            <input type="text" className="" placeholder="Search" size={60}/>
                                            <button type="submit" className="searchButton">
                                                <FaSearch />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                             
                            </div>
                        </div>
                        <div className="col-3">
                            <div className='d-flex justify-content-end'>
                                <button className="add-btn" onClick={handleToAdd}><FiPlus /></button>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Header

