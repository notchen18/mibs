import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div
            className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0"
            style={{ backgroundColor: '#392504' }} 
        >
            <div>
                <Link href="/">
                    <img src="/img/logo.png" alt="Logo" className="h-48 w-auto" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg"
            style={{ backgroundColor: '#FFE6BE' }}
            
            >
                {children}
            </div>
        </div>
    );
}
