import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"
import { 
    faAngular, 
    faCss3, 
    faGitAlt, 
    faHtml5, 
    faJsSquare, 
    faReact 
} from "@fortawesome/free-brands-svg-icons"
import Loader from "react-loaders"

const About = () => {

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm' ,'y', 's', 'e', 'l', 'f']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm a sophomore at Trinity, starting to look for internship 
                    opportunities in the technology sector. As a computer sciences 
                    major, I see myself closing the gap between different mathematical 
                    fields and their ability to optimise algorithms used by the financial 
                    sector.
                </p>
                <p>
                    As such, I've taken multiple higher level mathematics classes, 
                    was personally selected to be a peer tutor for upper-division 
                    mathematics (calculus/linear algebra), and clinched second place 
                    for our region within the International Collegiate Programming 
                    Competition: Division II (ICPC 2024: Houston). 
                </p>
                <p>
                    Now, I see myself applying that experience at companies that seek
                    math-oriented computer programmers.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#964B00'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About