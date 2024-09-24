import React from "react";
import {FaEnvelope,FaPhone,FaMapMarkedAlt} from 'react-icons/fa'

const Contact = () => {
    return (
        <div className="h-screen w-full backs text-2xl pb-80 flex flex-col justify-center items-center top-10 right-10">
            <div className="text-slate-50 font-mono" >
                <h2 className="text-5xl font-bold text-center mb-12">Get In Touch</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12"></div>
                
                <p className="text-2xl font-sans">Whether you're looking to collaborate on exciting projects, <br/>
                    have any questions,reach out!
                     I'm always open to <br/>new opportunities and would love to connect with like-minded individuals.</p>
                <div className="mb-4 mt-8">
                    <FaEnvelope className='inline-block text-green-300 mr-2'></FaEnvelope>
                    <a href="mailto:pnsowbarnika@gmail.com" className="hover:underline">pnsowbarnika@gmail.com</a>
                    </div>
                <div className="mb-4 mt-8">
                    <FaPhone className='inline-block text-green-300 mr-2'></FaPhone>
                    <a href="tel:75388828722" className="hover:underline">75388828722</a>
                    </div>
                <div className="mb-4 mt-8">
                    <FaMapMarkedAlt className='inline-block text-green-300 mr-2'></FaMapMarkedAlt>
                    <a 
                        href="https://www.google.com/maps/place/Perumanalur,+Tirupur,+Tamil+Nadu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline">
                        Perumanalur, Tirupur, Tamil Nadu
                    </a>
                </div>
            </div>
            <div className="flex-1 w-full"></div>
        </div>
    )
}
export default Contact;
