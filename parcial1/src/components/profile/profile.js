import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import './profile.css';
import './profileimg.png';
import Button from 'react-bootstrap/Button';

const Profile = () => {
    const clickSubmit = (() => {
            window.location.replace('http://localhost:3000/products');
        })
    return (
        <div>
            <img id='center' alt='imagen' src='https://picsum.photos/350'></img>
            <Form>
                <Form.Group className='grupo'>
                    <Form.Label className='small'>Nombre del usuario</Form.Label>
                    <Form.Control as='textarea' placeholder="Username"/>
                    <br></br>
                    
                </Form.Group>
                <Form.Group className='grupo'>
                    <Form.Label className='small'>Nombre completo</Form.Label>
                    <Form.Control as='textarea' placeholder="Nombre Completo"/>
                    <br></br>
                </Form.Group>
                <Form.Group className='grupo'>
                    <Form.Label className='small'>Descripción del perfil</Form.Label>
                    <Form.Control as='textarea' placeholder="Descripción del perfil"/>
                    <br></br>
                </Form.Group>
                <Form.Group className='grupo'>
                    <Form.Label className='small'>URL de la página personal</Form.Label>
                    <Form.Control as='textarea' placeholder="URL de la página personal"/>
                    <br></br>
                </Form.Group>
                <Button onClick={clickSubmit}>Guardar Cambios</Button>
            </Form>
        </div>
    );
};

export default Profile;