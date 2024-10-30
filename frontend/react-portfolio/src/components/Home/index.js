import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
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
            {/*<Logo />*/}
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home