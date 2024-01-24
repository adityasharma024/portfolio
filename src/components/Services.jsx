import React from 'react';

const Services = () => {
    return (
        <div className="main-container py-16 p-4 md:p-16">
            <h1 className="text-5xl font-bold text-center underline">My Projects</h1>
            <div className="projects-container space-y-6 md:space-y-0 md:space-x-6 px-4 md:px-10 flex flex-col md:flex-row mt-12">
                {/*
                    Repeat this block for each project container
                */}
                <div className="project-container cursor-pointer hover:bg-slate-400 bg-slate-200 p-5 text-center space-y-4 shadow-lg rounded-xl">
                    <i className="text-5xl fa-solid fa-cloud"></i>
                    <h1 className="text-4xl">Weather App</h1>
                    <p className="text-sm md:text-base">
                        Explore global weather effortlessly with my user-friendly Weather App. Powered by HTML, CSS, and JavaScript, this app fetches real-time data from the OpenWeather API. Stay informed about current conditions and forecasts, ensuring a seamless experience on any device. Plan your day with precision and style.
                    </p>
                    <a href="https://adityasharma024.github.io/cloud-burst/"  target='_blank' className="project-button bg-orange-500 px-3 py-2 text-xl rounded-full font-bold">Check</a>
                </div>

                <div className="project-container cursor-pointer hover:bg-slate-400 bg-slate-200 p-5 text-center space-y-4 shadow-lg rounded-xl">
                    <i className="text-5xl fa-solid fa-table-cells"></i>
                    <h1 className="text-4xl">Tic-Tac-Toe Game</h1>
                    <p className="text-sm md:text-base">
                        Dive into nostalgic gaming with my responsive Tic-Tac-Toe. Crafted using HTML, CSS, and JavaScript. Minimalist UI ensures a seamless experience. Playable on various devices, it reflects my passion for merging aesthetics with JavaScript functionality.
                    </p>
                    <a href="https://adityasharma024.github.io/Tic-Tac-Toe/" target='_blank' className="project-button bg-orange-500 px-3 py-2 text-xl rounded-full font-bold">Check</a>
                </div>

                <div className="project-container cursor-pointer hover:bg-slate-400 bg-slate-200 p-5 text-center space-y-4 shadow-lg rounded-xl">
                    <i className="text-5xl fa-solid fa-user"></i>
                    <h1 className="text-4xl">Portfolio Website</h1>
                    <p className="text-sm md:text-base">
                        Explore my world through my React-powered portfolio. Meticulously designed with Tailwind CSS, it seamlessly blends creativity with technology. Responsive and dynamic, it showcases my skills, projects, and passion for crafting immersive web experiences. Dive in to discover more about my journey and accomplishments.
                    </p>
                    <a href="/" className="project-button bg-orange-500 px-3 py-2 text-xl rounded-full font-bold p-4">Check</a>
                </div>
            </div>
        </div>
    );
};

export default Services;
