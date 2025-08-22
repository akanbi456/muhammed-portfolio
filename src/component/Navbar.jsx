


// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="fixed top-0 z-50 flex items-center justify-between w-full px-8 py-4 bg-white shadow-md">
//       <h1 className="text-3xl font-bold text-violet-700">
//         <em>Muhammed</em>
//       </h1>

//       {/* Desktop Menu */}
//       <ul className="hidden space-x-8 text-lg md:flex">
//         <li className="cursor-pointer hover:text-violet-600">Home</li>
//         <li className="cursor-pointer hover:text-violet-600">About</li>
//         <li className="cursor-pointer hover:text-violet-600">Skill</li>
//         <li className="cursor-pointer hover:text-violet-600">Project</li>
//         <li className="cursor-pointer hover:text-violet-600">Contact</li>
//       </ul>

//       {/* Hamburger Menu Icon */}
//       <div className="md:hidden">
//         <button onClick={toggleMenu}>
//           {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="absolute left-0 flex flex-col items-center w-full py-6 space-y-4 bg-white shadow-md top-20 md:hidden">
//          <li className="cursor-pointer hover:text-violet-600">Home</li>
//           <a href="./About"> <li className="cursor-pointer hover:text-violet-600">About</li></a>
//           <li className="cursor-pointer hover:text-violet-600">Skill</li>
//           <li className="cursor-pointer hover:text-violet-600">Project</li>
//           <li className="cursor-pointer hover:text-violet-600">Contact</li>
//         </ul>
//       )}
//     </nav>
    
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (e, id) => {
    e.preventDefault(); 
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); 
  };


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed top-0 z-50 flex items-center justify-between w-full px-8 py-4 bg-white shadow-md">
      <h1 className="text-3xl font-bold text-violet-700"id='#home '>
        <em>Muhammed</em>
      </h1>

    
      <ul className="hidden space-x-8 text-lg md:flex">
        <li onClick={(e) => handleNavClick(e, 'home')} className="cursor-pointer hover:text-violet-600">Home</li>
        <li onClick={(e) => handleNavClick(e, 'about')} className="cursor-pointer hover:text-violet-600">About</li>
        <li onClick={(e) => handleNavClick(e, 'skill')} className="cursor-pointer hover:text-violet-600">Skill</li>
        <li onClick={(e) => handleNavClick(e, 'project')} className="cursor-pointer hover:text-violet-600">Project</li>
        

        <li onClick={(e) => handleNavClick(e, 'contact')} className="cursor-pointer hover:text-violet-600">Contact</li>
      </ul>

      
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute left-0 flex flex-col items-center w-full py-6 space-y-4 bg-white shadow-md top-20 md:hidden">
          <li onClick={(e) => handleNavClick(e, 'home')} className="cursor-pointer hover:text-violet-600">Home</li>
          <li onClick={(e) => handleNavClick(e, 'about')} className="cursor-pointer hover:text-violet-600">About</li>
          <li onClick={(e) => handleNavClick(e, 'skill')} className="cursor-pointer hover:text-violet-600">Skill</li>
          <li onClick={(e) => handleNavClick(e, 'project')} className="cursor-pointer hover:text-violet-600">Project</li>
          <li onClick={(e) => handleNavClick(e, 'contact')} className="cursor-pointer hover:text-violet-600">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
