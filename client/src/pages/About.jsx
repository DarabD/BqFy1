
import React from 'react';
import '../store/index';


const developers = [
  {
    id: 1,
    name: 'Muhammad Darab',
    description: 'Specializing in React.js Darab is a creative force in turning ideas into reality.',
    image: 'Muhammad Darab.jpg',
  },
  {
    id: 2,
    name: 'Muhammad Salman',
    description: 'Specializing in React.js Salman is a creative force in turning ideas into reality.',
    image: 'Developer.jpg',
  },
  {
    id: 3,
    name: 'Affan',
    description: 'Specializing in React.js Affan is a creative force in turning ideas into reality.',
    image: 'Developer.jpg',
  },
];

const AboutUs = () => {
  return (
    <div className="container" id='About'>
      <header>
        <br/>
        <br/>
        <h4 className='about-h'>About Us</h4>
        <p className='about-h-d'>Welcome to QuickCraft , where innovation meets excellence. Our team of four dynamic professionals is driven by a shared passion for<br></br>creating cutting-edge solutions in the realms of web and graphic design.</p>
      </header>

      <div className="developers">
        {developers.map((developer) => (
          <div key={developer.id} className="developer">
            <img src={developer.image} alt={developer.name} />
            <h3 className='A-n'>{developer.name}</h3>
            <p className='A-d'>{developer.description}</p>
          </div>
        ))}
      </div>
      <br/>
      <br/>
    </div>
  );
};

export default AboutUs;
