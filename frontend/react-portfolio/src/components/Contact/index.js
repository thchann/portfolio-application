import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



const Contact = () => {
    
    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}
                />
                </h1>
                <p>
                    I am particularly interested in internship opportunities
                    that involve large-scale projects, as these projects provide
                    invaluable hands-on experience which boosts my capability as
                    a full stack developer. Feel free to reach out using the form 
                    below!
                </p>
            </div>
        </div>
        <Loader type='pacman' />
    </>)
}

export default Contact