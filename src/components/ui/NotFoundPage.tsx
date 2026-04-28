export default function NotFoundPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-6">
            <div className="text-center max-w-lg">

                {/* 404 Text */}
                <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white">
                    Page not found
                </h2>

                {/* Description */}
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                    The page you're looking for doesn’t exist or has been moved.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex items-center justify-center gap-4">

                    {/* Go Home */}
                    <a
                        href="/"
                        className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                        Go Home
                    </a>

                    {/* Go Back */}
                    <button
                        onClick={() => window.history.back()}
                        className="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                        Go Back
                    </button>
                </div>

                {/* Illustration */}
                <div className="mt-10 relative">
                    <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl animate-pulse"></div>
                </div>

            </div>
        </div>
    );
}