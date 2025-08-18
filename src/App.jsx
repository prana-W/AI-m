import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home, ApiKeys, About, NotFound } from './pages';
import { Header, Footer } from './components';

function App() {
    return (
        <>
            <Router>
                <Header />
                <main className="p-4 min-h-[80vh]">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/apikeys" element={<ApiKeys />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
