import React from 'react'
import SearchBar from '../Components/SearchBar';

function Projects() {
  return (

    <div className="container mx-auto flex-auto justify-center">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold font-sans"> DESIGN OF WEB-BASED PROJECT REPOSITORY WITH CHATBOT </h1>
        <p className='font-sans'>John Doe</p>
        <nav className="flex justify-center space-x-4">
          <a href="#abstract">Abstract</a>
          <a href="#methodology">Methodology</a>
          <a href="#conclusion">Conclusion</a>
        </nav>
      </header>

      <main className="p-4">
        <section id="abstract">
          <h2 className="text-xl font-bold">Abstract</h2>
          {/* Abstract content goes here */}
        </section>

        <section id="introduction">
          <h2 className="text-xl font-bold">Introduction</h2>
          {/* Introduction content goes here */}
        </section>

        <section id="methodology">
          <h2 className="text-xl font-bold">Methodology</h2>
          {/* Methodology content goes here */}
        </section>

        <section id="results">
          <h2 className="text-xl font-bold">Results</h2>
          {/* Results content goes here */}
        </section>

        <section id="discussion">
          <h2 className="text-xl font-bold">Discussion</h2>
          {/* Discussion content goes here */}
        </section>

        <section id="conclusion">
          <h2 className="text-xl font-bold">Conclusion</h2>
          {/* Conclusion content goes here */}
        </section>
      </main>

      <footer className="bg-gray-300 p-4 text-center">
        {/* Citations, contact info, and links go here */}
      </footer>
    </div>
  );
};

export default Projects;
