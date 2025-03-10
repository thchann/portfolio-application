import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import profilePic from '../../assets/images/profile.jpg';

const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = 
        [' ', 
        'T', 
        'h', 
        'e', 
        'o', 
        'd', 
        'o', 
        'r', 
        'e', 
        ' ', 
        'C', 
        'h', 
        'a', 
        'n'
    ]
    const jobArray = 
        ['J', 
        'u', 
        'n', 
        'i', 
        'o', 
        'r', 
        ' ', 
        'w', 
        'e', 
        'b', 
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r'
    ]

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _12`}>I'</span>
                        <span className={`${letterClass} _12`}>m</span>
                        <AnimatedLetters  
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}/>
                        <br />
                        <AnimatedLetters  
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={16}
                        />
                    </h1>
                    <h2>Frontend Developer / JavaScript Expert</h2>
                    <Link to="/contact" className='flat-button'>
                        CONTACT ME
                    </Link>
                </div>
                {/* Image Container */}
                <div className="image-container">
                    <img src={profilePic} alt="Profile" className="profile-image" />
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Home