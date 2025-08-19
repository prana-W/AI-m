import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, ApiKeys, About, NotFound, Contact, Models } from './pages';
import { Header, Footer } from './components';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
    return (
        <ErrorBoundary>
            <Router>
                {/* Full-height flex container */}
                <div className="min-h-screen flex flex-col">
                    <Header />
                    {/* Main grows and lets pages like Home stretch */}
                    <main className="flex-1 flex flex-col">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/api-keys" element={<ApiKeys />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/models" element={<Models />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>


                </div>
                <Footer />
            </Router>
        </ErrorBoundary>
    );
}

export default App;
