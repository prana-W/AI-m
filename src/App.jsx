import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, ApiKeys, About, NotFound } from './pages';
import { Header, Footer } from './components';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
    return (
        <ErrorBoundary>
            <Router>
                <div className="h-screen flex flex-col">
                    <Header />
                    <div className="flex-1">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/api-keys" element={<ApiKeys />} />
                            <Route path="/about" element={<About />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </div>
                <Footer />
            </Router>
        </ErrorBoundary>
    );
}

export default App;
