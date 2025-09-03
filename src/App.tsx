import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LoadingProvider, useLoading } from "./contexts/LoadingContext";
import Navigation from "./components/Navigation";
import PageTransition from "./components/PageTransition";
import GlobalLoader from "./components/GlobalLoader";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

const AppContent = () => {
  const { isLoading, loadingMessage } = useLoading();

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Navigation />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </PageTransition>
      </div>
      <GlobalLoader isLoading={isLoading} message={loadingMessage} />
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <Router>
          <AppContent />
        </Router>
      </LoadingProvider>
    </ThemeProvider>
  );
}

export default App;
