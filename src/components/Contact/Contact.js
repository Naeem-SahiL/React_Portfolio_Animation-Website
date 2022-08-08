import './Contact.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Contact() {
    const [lettersClass, setLettersClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLettersClass('text-animate-hover')
        }, 3000)
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_lub76fk', 'template_vfnepdx', refForm.current, 'WKkk0vb53iAdCXjBm')
            .then(function (response) {
                alert('Message sent succefully!');
                e.target.reset();
            }, function (error) {
                alert('Something went wrong! Please try again');
            });
    }

    const position = [31.579646, 74.354349];
    return (
        <>
            <div className="page-container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={lettersClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in full(<span className='mern'>MERN</span>) stack job opportunity. However, if you have some other
                        request or question, feel free to contact me. Or just say hello, that's also fine.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={submitHandler}>
                            <ul>
                                <li className='half'>
                                    <input
                                        type="text"
                                        name='name'
                                        placeholder='Name'
                                        required
                                    />
                                </li>
                                <li className='half'>
                                    <input
                                        type="email"
                                        name='email'
                                        placeholder='Email'
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        type="text"
                                        name='subject'
                                        placeholder='Subject'
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        name='message'
                                        placeholder='Message'
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <button type='submit' className='flat-button'>SEND</button>
                                </li>

                            </ul>
                        </form>
                    </div>

                </div>
                <div className="info-map">
                    Muhammad Naeem,
                    <br />
                    UET Lahore, Pakistan <br />
                    <span>muhammadnaeem3429@gmail.com</span>

                </div>
                <div className="map-wrap">
                    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
                        <TileLayer
                            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                Muhammad Naeem currently lives here <br />
                                Come on a cup of tea
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact