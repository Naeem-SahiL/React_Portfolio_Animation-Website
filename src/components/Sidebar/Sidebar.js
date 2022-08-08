import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import LogoN from '../../assets/images/naeem_logo.png'
import Name from '../../assets/images/naeem_text.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Sidebar() {

    return (
        <div className="nav-bar">
            <Link className='logo' to='/'>
                <img src={LogoN} alt='logo' />
                <img src={Name} alt='name' />
            </Link>
            <nav>
                <NavLink exact='true' activeclassname="active" to='/' >
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname="active" className='about-link' to='/about' >
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname="active" className='contact-link' to='/contact' >
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://linkedin.com/in/naeemsahil'
                    >
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/Naeem-SahiL'
                    >
                        <FontAwesomeIcon icon={ faGithub } color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.instagram.com/naeem_3630/'
                    >
                        <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar