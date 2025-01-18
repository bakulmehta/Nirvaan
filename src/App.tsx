import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Form from "./pages/Form";
import Insights from "./pages/Insights";
import Title from "./pages/Title";
import { GradientBackground } from "./components/GradientBackground";
import { AudioControls } from "./components/AudioControls";

function AnimatedRoutes(): JSX.Element {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Title />} />
                <Route path="/home" element={<Form />} />
                <Route path="/insights" element={<Insights />} />
            </Routes>
        </AnimatePresence>
    );
}

function App(): JSX.Element {
    return (
        <Router>
            <GradientBackground>
                <AnimatedRoutes />
            </GradientBackground>
            <AudioControls />
        </Router>
    );
}

export default App;
