import React, { useState, useEffect } from 'react';
import './home.css';

const Home = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('')
            .then(response => response.json())
            .then(images => setImages(images))
            .catch(error => console.error('Error fetching locations:', error));
    }, []);

    return (
        <div>
            <div className='upside'>
                <img src='' alt='' id='profile'></img>
                <h2>Username</h2>
                <h4>www.website.com</h4>
            </div>
            <div className='downside'>
                
            </div>
        </div>
    );
};

export default Home;