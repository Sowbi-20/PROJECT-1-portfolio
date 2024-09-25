    import React from "react";

    const projects = [
        // {
        //     title: "IOT",
        //     description: "This is a brief description of project 1.",
        //     link: "#"
        // },
        {
            title: "Behaviour Based Malware Detection",
            description: "This  is a project focused on identifying malware by analyzing its behavior patterns rather than relying on signature-based detection. This approach detects unknown or evolving threats by monitoring system activities and identifying malicious actions.",
            link: "#"
        },
        {
            title: "Phishing Detection System",
            description: "This  is a project aimed at identifying and preventing phishing attacks by analyzing suspicious emails or websites. It uses machine learning and pattern recognition techniques to detect fraudulent attempts to steal sensitive information like passwords or credit card details.",
            link: "#"
        },
        {
            title: "Data Breach Analysis and Notification System",
            description: "This  is a project designed to detect and analyze data breaches in real time. It identifies unauthorized access to sensitive data, assesses the scope of the breach, and automatically sends notifications to affected parties, ensuring timely response and mitigation.",
            link: "#"
        }
    ];
    const Projects = () => {
        return (
            <>
                <div className="h-screen w-full flex flex-col justify-center items-center text-center backs">
            <h2 className="text-4xl font-bold text-white mb-12 w-full py-8 bg-backs">
                Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                        <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </>           

        )
    }
    export default Projects;
