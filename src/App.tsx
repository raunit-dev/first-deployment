
// Importing icons from lucide-react for a modern look
import { Rocket, ShieldCheck, Lightbulb } from 'lucide-react';

// Main App component for the landing page
function App() {
  return (
    // Main container for the entire landing page, setting font, background, and minimum height.
    // Flexbox is used to center content vertically and horizontally.
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 font-inter text-gray-800">

      {/* Header section - Hero */}
      <header className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-12 mb-10 w-full max-w-4xl text-center">
        {/* Main heading with responsive font sizes */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-indigo-700 mb-4 leading-tight">
          Welcome to Our Awesome Service
        </h1>
        {/* Sub-headline with responsive font sizes */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8">
          Your journey to something incredible begins right here. Discover the difference.
        </p>
        {/* Call-to-action button */}
        <a
          href="#features-section" // Link to the features section
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get Started Now!
        </a>
      </header>

      {/* Features section */}
      {/* Added an ID for the CTA button to link to */}
      <section id="features-section" className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-12 mb-10 w-full max-w-4xl">
        {/* Section heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-8 text-center">
          Why Choose Us?
        </h2>
        {/* Unordered list for features, using a grid for responsive layout */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Feature 1: Fast and reliable */}
          <li className="flex flex-col items-center p-4 bg-indigo-50 rounded-xl shadow-md transition duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-2px]">
            <Rocket className="w-12 h-12 text-indigo-500 mb-4" /> {/* Icon for speed */}
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Blazing Fast</h3>
            <p className="text-gray-600 text-center">Experience unparalleled speed and reliability. Your data, delivered instantly.</p>
          </li>
          {/* Feature 2: Secure and private */}
          <li className="flex flex-col items-center p-4 bg-purple-50 rounded-xl shadow-md transition duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-2px]">
            <ShieldCheck className="w-12 h-12 text-purple-500 mb-4" /> {/* Icon for security */}
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Bank-Grade Security</h3>
            <p className="text-gray-600 text-center">Your privacy is our top priority. Rest assured with our robust security measures.</p>
          </li>
          {/* Feature 3: Easy to use */}
          <li className="flex flex-col items-center p-4 bg-pink-50 rounded-xl shadow-md transition duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-2px]">
            <Lightbulb className="w-12 h-12 text-pink-500 mb-4" /> {/* Icon for ease of use */}
            <h3 className="text-xl font-semibold text-pink-700 mb-2">Incredibly Intuitive</h3>
            <p className="text-gray-600 text-center">Designed with simplicity in mind. Get started in minutes, no complicated setup.</p>
          </li>
        </ul>
      </section>

      {/* Footer section */}
      <footer className="w-full max-w-4xl text-center text-gray-500 text-sm py-4">
        &copy; {new Date().getFullYear()} Our Awesome Service. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
