import { BrowserRouter } from "react-router-dom";

import { Contact, Navbar, StarsCanvas, LinkTree } from "./components";

const App = () => {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                </div>
                <div className="relative z-0">
                    <LinkTree />
                    <Contact />
                    <StarsCanvas />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
