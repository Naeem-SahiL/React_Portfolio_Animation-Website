import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGit, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

function About() {
    const [lettersClass, setLettersClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLettersClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <>
        <div className='page-container about-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={lettersClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e',]}
                        idx={15}
                    />
                </h1>
                <p>
                    I am a Final Year Student of BS Computer Science at University of Engineering & Technology, Lahore.
                    I am very ambitious full stack dev/ MERN stack developer looking for a role
                    in establshded IT company with the opportunity to work with latest technologies
                    on challenging and diverse projects.
                </p>
                <p>
                    I'm quite confidant in web dev especialy React, naturally curious, and perpetually working on improving
                    my web dev skills.
                </p>
                <p>
                    If I need to define myself in one sentence, that will be a final year student,
                    motivated web developer, learning enthusiast, hardworking and tech-obsessed person!!!
                </p>

            </div>

            <div className="stage-cube-cont">
                <div className="cube-spinner">

                    <div className="face1">
                        <FontAwesomeIcon icon={ faJs } color='#F0DB4F'/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={ faHtml5 } color='#F06569'/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={ faCss3 } color='#28A4D9'/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={ faReact } color='#5ED4F4'/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={ faNodeJs } color='#EFD81D'/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={ faGit } color='#EC4B28'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About