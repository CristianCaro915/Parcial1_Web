import React, { useState, useEffect } from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const HomeDetail = (props) => {
    return (
        <div>
            <Link to={'/imagen/'}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props} />
                    <Card.Body>
                        <Card.Title>Imagen</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};
export default HomeDetail;