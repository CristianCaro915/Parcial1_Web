import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import './profile.css';
import Button from 'react-bootstrap/Button';
import Imagen from './profileimg.png';

const Profile = () => {
    const clickSubmit = (() => {
            window.location.replace('http://localhost:3000/');
        })
    return (
        <div className='container'>
            <div className='center'>
                <img className='imagen' alt='imagen' src={Imagen}></img>
                <Form>
                    <Form.Group className='grupo'>
                        <Form.Label className='small'>Primer nombre</Form.Label>
                        <Form.Control as='textarea' placeholder="Primer nombre"/>
                        <br></br>
                    </Form.Group>
                    <Form.Group className='grupo'>
                        <Form.Label className='small'>Segundo nombre</Form.Label>
                        <Form.Control as='textarea' placeholder="Segundo Nombre"/>
                        <br></br>
                    </Form.Group>
                    <Form.Group className='grupo'>
                        <Form.Label className='small'>Numero de posts</Form.Label>
                        <Form.Control as='textarea' placeholder="Posts"/>
                        <br></br>
                    </Form.Group>
                    <Form.Group className='grupo'>
                        <Form.Label className='small'>Numero de followers</Form.Label>
                        <Form.Control as='textarea' placeholder="Followers"/>
                        <br></br>
                    </Form.Group>
                    <Form.Group className='grupo'>
                        <Form.Label className='small'>Numero de following</Form.Label>
                        <Form.Control as='textarea' placeholder="Following"/>
                        <br></br>
                    </Form.Group>
                    <Button onClick={clickSubmit}>Guardar Cambios</Button>
                </Form>
            </div>
        </div>
    );
};

export default Profile;