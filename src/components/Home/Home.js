import './Home.scss'
import LogoName from '../../assets/images/naeem_logo2.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Logo from './Logo/Logo';
import Loader from 'react-loaders';

function Home() {
    const nameArray = ['a', 'e', 'e', 'm'];
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

    const [lettersClass, setLettersClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLettersClass('text-animate-hover')
        }, 3600)
    }, [])

    return (
        <>
            <div className='page-container home-page'>
                <div className="text-zone">
                    <h1>
                        <span className={lettersClass}>H</span>
                        <span className={`${lettersClass} _12`}>i,</span>
                        <span></span>
                        <br />
                        <span className={`${lettersClass} _13`}>I</span>
                        <span className={`${lettersClass} _14`}>'m</span>

                        <img src={LogoName} alt='developer' />
                        <AnimatedLetters
                            letterClass={lettersClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters
                            letterClass={lettersClass}
                            strArray={jobArray}
                            idx={19}
                        />
                    </h1>
                    <h2>React Developer / MERN Stack Developer</h2>
                    <Link to='/contact' className='flat-button'>
                        CONTACT ME
                    </Link>
                </div>
                <Logo />
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Home 