import React, { useState, useEffect } from 'react';
import './home.css';
import Imagen from './profileimg.png';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Home = () => {
    const [users, setUsers] = useState([]);
/* 
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/CristianCaro915/Parcial1_Web/main/parcial1/public/users.json')
            .then(response => 
                
                response.json())
                console.log(response)
            .then(users => setUsers(users))
            .catch(error => console.error('Error fetching locations:', error));
    }, []);

    function buscarPrimero(users) {
        for (const user of users) {
            return user;
        }
    }
    const first = buscarPrimero(users)
*/
    let primer_nombre ='Mario';
    let segundo_nombre ='Hermoso';
    let posts ='870';
    let followers ='496';
    let following ='112';
    return (
        <div>
            <div className='upside'>
                <Link to={{pathname: '/profile/'}}>
                    <img src={Imagen} alt='' className='upside-img'></img>
                </Link>
                <div className='upside-text'>
                    <p>Primer nombre: {primer_nombre}</p>
                    <p>Segundo nombre: {segundo_nombre}</p>
                    <p>Posts: {posts}</p>
                    <p>Followers: {followers}</p>
                    <p>Following: {following}</p>
                </div>

            </div>
            <div className='downside'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/350" />
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/350" />
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/350" />
                </Card>
            </div>
            <br></br>
            <div className='downside'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/350" />
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/350" />
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/350" />
                </Card>
            </div>
            <div className='downside'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/350" />
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/350" />
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/350" />
                </Card>
            </div>
            <div className='downside'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/350" />
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/350" />
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/350" />
                </Card>
            </div>
            
        </div>
    );
};

export default Home;



/* 
<div className='upside'>
<img src={Imagen} alt='' className='upside-img'></img>
<div className='upside-text'>
    <p>Primer nombre {first.firstname}</p>
    <p>Segundo nombre {first.secondname}</p>
    <p>Posts {first.posts}</p>
    <p>Followes {first.followers}</p>
    <p>Following {first.following}</p>
</div>

</div>
*/