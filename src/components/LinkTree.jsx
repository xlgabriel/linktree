import { me, phone, email, youtube } from "../assets";
import { motion } from "framer-motion";

const LinkTree = () => {
    return (
        <div id="connect" className="relative z-0 min-h-screen flex flex-col items-center">
            <div className="flex flex-col items-center mt-32">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-8 avatar-violet-gradient">
                    <img src={me} alt="avatar" className="w-full h-full object-cover p-1 rounded-full" />
                </div>
                <h1 className="text-white text-4xl font-bold mb-6">Let's connect</h1>
                <div className="flex flex-col items-center">
                    <a
                        href="https://drive.google.com/file/d/11yKzszigs_3QRD9OoXTnPiPn12eY0rFy/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-4 w-64 text-center green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                    >
                        <button className="w-full bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                            <strong>CV</strong>
                        </button>
                    </a>
                    <a
                        href="https://xlgabriel.github.io/portfolio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-4 w-64 text-center green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                    >
                        <button className="w-full bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                            Portfolio
                        </button>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/xlgabriel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-4 w-64 text-center green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                    >
                        <button className="w-full bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                            LinkedIn
                        </button>
                    </a>
                    <a
                        href="https://github.com/xlgabriel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-4 w-64 text-center green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                    >
                        <button className="w-full bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                            GitHub
                        </button>
                    </a>
                    <div className="flex flex-row pt-4 gap-9">
                        <a
                            href="mailto:gabriel.jeannot.personal@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-4 text-center violet-gradient rounded-full shadow-card hover:scale-110 transition duration-300 ease-in-out transform"
                        >
                            <img src={email} alt="email" className="w-9 h-9 inline-block" />
                        </a>
                        <a
                            href="https://youtube.com/@xlgabriel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-4 text-center violet-gradient rounded-full shadow-card hover:scale-110 transition duration-300 ease-in-out transform"
                        >
                            <img src={youtube} alt="email" className="w-9 h-9 inline-block" />
                        </a>
                    </div>
                </div>
                <div className="pt-10 pb-16 w-full flex justify-center items-center">
                    <a href="#contact">
                        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                            <motion.div
                                animate={{
                                    y: [0, 24, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                                className="w-3 h-3 rounded-full bg-secondary mb-1"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LinkTree;
