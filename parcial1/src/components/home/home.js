import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './home.css';
import HomeDetail from './homedetail';
import './profileimg.png'

const Home = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/CristianCaro915/Parcial1_Web/main/parcial1/public/users.json')
            .then(response => response.json())
            .then(user => setUser(user))
            .catch(error => console.error('Error fetching locations:', error));
    }, []);

    return (
        <div>
            <div className='upside'>
                <img src='https://picsum.photos/350' alt='' id='profile'></img>
                <h2>Username</h2>
                <h4>Nombre completo</h4>
                <h4>www.page.com</h4>
            </div>
            <div className='downside'>
                <Card style={{ width: '18rem' }}>
                <HomeDetail image={'https://picsum.photos/350'} />
                </Card>
                <Card style={{ width: '18rem' }}>
                <HomeDetail image={'https://picsum.photos/350'} />
                </Card>
                <Card style={{ width: '18rem' }}>
                <HomeDetail image={'https://picsum.photos/350'} />
                </Card>
                <Card style={{ width: '18rem' }}>
                <HomeDetail image={'https://picsum.photos/350'} />
                </Card>
                <Card style={{ width: '18rem' }}>
                <HomeDetail image={'https://picsum.photos/350'} />
                </Card>
                <Card style={{ width: '18rem' }}>
                <HomeDetail image={'https://picsum.photos/350'} />
                </Card>
                <Card style={{ width: '18rem' }}>
                <HomeDetail image={'https://picsum.photos/350'} />
                </Card>
                <Card style={{ width: '18rem' }}>
                <HomeDetail image={'https://picsum.photos/350'} />
                </Card>
                <Card style={{ width: '18rem' }}>
                <HomeDetail image={'https://picsum.photos/350'} />
                </Card>
                <Card style={{ width: '18rem' }}>
                <HomeDetail image={'https://picsum.photos/350'} />
                </Card>
                <Card style={{ width: '18rem' }}>
                <HomeDetail image={'https://picsum.photos/350'} />
                </Card>
                <Card style={{ width: '18rem' }}>
                <HomeDetail image={'https://picsum.photos/350'} />
                </Card>
            </div>
        </div>
    );
};

export default Home;