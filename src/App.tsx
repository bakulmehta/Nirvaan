import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Form from "./pages/Form";
import Insights from "./pages/Insights";
import Title from "./pages/Title";
import { GradientBackground } from "./components/GradientBackground";
import { AudioControls } from "./components/AudioControls";

// Protected route component
function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const location = useLocation();
    const isNavigatedFromApp = location.state?.from === 'app';

    if (!isNavigatedFromApp) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
}

function AnimatedRoutes(): JSX.Element {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Title />} />
                <Route 
                    path="/home" 
                    element={
                        <ProtectedRoute>
                            <Form />
                        </ProtectedRoute>
                    } 
                />
                <Route 
                    path="/insights" 
                    element={
                        <ProtectedRoute>
                            <Insights />
                        </ProtectedRoute>
                    } 
                />
                <Route path="*" element={<Navigate to="/" replace />} />
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
