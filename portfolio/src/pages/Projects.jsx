    import React from "react";

    const projects = [
        {
            title: "IOT",
            description: "This is a brief description of project 1.",
            link: "#"
        },
        {
            title: "Behaviour Based Malware Detection",
            description: "This is a brief description of project 2.",
            link: "#"
        },
        {
            title: "Phishing Detection System",
            description: "This is a brief description of project 3.",
            link: "#"
        },
        {
            title: "",
            description: "This is a brief description of project 4.",
            link: "#"
        }
    ];
    const Projects = () => {
        return (
            <div className="h-screen w-full backs flex flex-col justify-center items-center text-center">
            <h2 className="text-4xl font-bold text-white mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-16">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                        <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        
                    </div>
                ))}
            </div>
        </div>
                    

        )
    }
    export default Projects;
