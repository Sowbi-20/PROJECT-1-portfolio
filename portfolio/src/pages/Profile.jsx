import React from "react";
import Profimages from '../assets/images/profile1.jpeg'

const Profile = () => {
    return (
        <div className="h-screen w-full backs p-10 flex flex-col justify-center items-left top-40 right-40">
            <div className="text-white  mb-10">
                <div>
                    <h1 className="text-neutral-300 text-6xl font-bold font-serif mb-4">I'm Sowbarnika</h1>
                    <p className="text-neutral-300 text-3xl">      a passionate and dedicated student 
                        eager to embark <br/> on a career in web development.With a strong foundation in<br/> 
                        HTML, CSS, and JavaScript, I enjoy creating dynamic and <br/>responsive web applications. 
                        I thrive on learning new technologies and <br/>improving my skills to build innovative solutions.
                    </p>
                    
                </div>
                <div className="absolute top-40 right-40 p-5">
                <img 
                    src={Profimages} alt="Profile"
                    className="rounded-full shadow-lg w-96 h-96 object-cover"    
                />
                </div>
            </div>
        </div>
    )
}
export default Profile;
