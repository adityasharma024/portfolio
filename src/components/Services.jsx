import React from 'react';

const Services = () => {
    return (
        <div className="main-container py-16 p-4 md:p-16">
            <h1 className="text-5xl font-bold text-center underline">My Projects</h1>
            <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 mt-12">
                <div className="project-container cursor-pointer hover:bg-slate-400 bg-slate-200 p-5 text-center space-y-4 shadow-lg rounded-xl flex flex-col justify-between">
                    <div>
                        <i className="text-5xl fa-solid "></i>
                        <h1 className="text-4xl">Chatify</h1>
                        <p className="text-sm md:text-base">
                        Engage in real-time messaging via our ReactJS-driven chat application, employing Firebase for backend functionalities. Styled with CSS and powered by Redux for seamless state management, it provides a dynamic and intuitive communication platform. Experience smooth interactions and stay connected effortlessly with our feature-rich chat app, designed for a seamless user experience
                        </p>
                    </div>
                    <a href="https://chatify-smoky.vercel.app/" target='_blank' className="project-button bg-orange-500 px-3 py-2 text-xl rounded-full font-bold">Check</a>
                </div>
                
                <div className="project-container cursor-pointer hover:bg-slate-400 bg-slate-200 p-5 text-center space-y-4 shadow-lg rounded-xl flex flex-col justify-between">
                    <div>
                       
                        <h1 className="text-4xl">BudgetBliss</h1>
                        <p className="text-sm md:text-base">
                        Utilize our ReactJS and Firebase-based expense tracker for effortless financial management. Log expenses and income seamlessly, gaining comprehensive insights. Interactive line and pie charts provide clear visualizations of spending habits, empowering informed financial decisions. With real-time data synchronization and intuitive design, our tracker simplifies budget management, helping users achieve financial goals confidently.
                        </p>
                    </div>
                    <a href="https://budget-bliss-9vy6.vercel.app/" target='_blank' className="project-button bg-orange-500 px-3 py-2 text-xl rounded-full font-bold">Check</a>
                </div>
                
                <div className="project-container cursor-pointer hover:bg-slate-400 bg-slate-200 p-5 text-center space-y-4 shadow-lg rounded-xl flex flex-col justify-between">
                    <div>
                       
                        <h1 className="text-4xl">FilmFolio</h1>
                        <p className="text-sm md:text-base">
                        Dive into our ReactJS and Firebase project, offering seamless authentication and database functionality. Rate and comment on movies, fostering engaging discussions. Add new movies to expand the collection, enhancing user interaction and content diversity. With intuitive authentication features and Firebase's robust database capabilities, our platform ensures a smooth and secure user experience. Immerse yourself in the world of cinema, sharing opinions and discovering new favorites effortlessly.
                        </p>
                    </div>
                    <a href="https://filmfolio-mocha.vercel.app/" target='_blank' className="project-button bg-orange-500 px-3 py-2 text-xl rounded-full font-bold">Check</a>
                </div>
                
                {/* Add more project containers as needed */}
                
                <div className="project-container cursor-pointer hover:bg-slate-400 bg-slate-200 p-5 text-center space-y-4 shadow-lg rounded-xl flex flex-col justify-between">
                    <div>
                        <i className="text-5xl fa-solid fa-cloud"></i>
                        <h1 className="text-4xl">Weather App</h1>
                        <p className="text-sm md:text-base">
                            Explore global weather effortlessly with my user-friendly Weather App. Powered by HTML, CSS, and JavaScript, this app fetches real-time data from the OpenWeather API. Stay informed about current conditions and forecasts, ensuring a seamless experience on any device. Plan your day with precision and style.
                        </p>
                    </div>
                    <a href="https://adityasharma024.github.io/cloud-burst/" target='_blank' className="project-button bg-orange-500 px-3 py-2 text-xl rounded-full font-bold">Check</a>
                </div>
                
                <div className="project-container cursor-pointer hover:bg-slate-400 bg-slate-200 p-5 text-center space-y-4 shadow-lg rounded-xl flex flex-col justify-between">
                    <div>
                        <i className="text-5xl fa-solid fa-table-cells"></i>
                        <h1 className="text-4xl">Tic-Tac-Toe Game</h1>
                        <p className="text-sm md:text-base">
                            Dive into nostalgic gaming with my responsive Tic-Tac-Toe. Crafted using HTML, CSS, and JavaScript. Minimalist UI ensures a seamless experience. Playable on various devices, it reflects my passion for merging aesthetics with JavaScript functionality.
                        </p>
                    </div>
                    <a href="https://adityasharma024.github.io/Tic-Tac-Toe/" target='_blank' className="project-button bg-orange-500 px-3 py-2 text-xl rounded-full font-bold">Check</a>
                </div>
                
                <div className="project-container cursor-pointer hover:bg-slate-400 bg-slate-200 p-5 text-center space-y-4 shadow-lg rounded-xl flex flex-col justify-between">
                    <div>
                        <i className="text-5xl fa-solid fa-user"></i>
                        <h1 className="text-4xl">Portfolio Website</h1>
                        <p className="text-sm md:text-base">
                            Explore my world through my React-powered portfolio. Meticulously designed with Tailwind CSS, it seamlessly blends creativity with technology. Responsive and dynamic, it showcases my skills, projects, and passion for crafting immersive web experiences. Dive in to discover more about my journey and accomplishments.
                        </p>
                    </div>
                    <a href="/" className="project-button bg-orange-500 px-3 py-2 text-xl rounded-full font-bold p-4">Check</a>
                </div>
            </div>
        </div>
    );
};

export default Services;
