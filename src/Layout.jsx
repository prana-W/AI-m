import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components';

function Layout() {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 flex flex-col">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Layout;
