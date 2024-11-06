import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'



const Contact = () => {

    const[formData, setFormData] = useState({ name:'', email:'', submission:'' });
    const[submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({...prev, [name]:value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:5000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData).toString(),
            });
    
            if (response.ok) {
                const data = await response.json();
                setSubmitMessage(data.message); 
                setFormData({ name: '', email: '', submission: '' });
            } else {
                const errorData = await response.json();
                console.log(errorData);
                setSubmitMessage(errorData.message || 'Error submitting form');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitMessage('Error submitting form');
        }
    };

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
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            className="box-submission"
                            type='text'
                            name='name'
                            id='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            className="box-submission"
                            type='email'
                            name='email'
                            id='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="paragraph-group">
                        <label htmlFor="submission">Message</label>
                        <input
                            className="box-submission"
                            name='submission'
                            id='submission'
                            value={formData.submission}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submission-button">
                        Submit <FontAwesomeIcon icon={faEnvelope}/>
                    </button>
                </form>
                {submitMessage && <p>{submitMessage}</p>} {""}
            </div>
        </div>
        <Loader type='pacman' />
    </>)
}

export default Contact