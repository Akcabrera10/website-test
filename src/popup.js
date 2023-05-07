import React, { useState } from "react";


function getTechIcon(techName) {
  switch(techName) {
    case 'JavaScript':
      return <i className="icon icon-js"></i>;

    case 'HTML':
      return <i className="icon icon-html"></i>;

    case 'Soldering': 
    case'Schematic Diagram Implementation':
    case'Instrumentation Troubleshooting':
    case 'STM32':
      case 'KiCAD':
        return <i className="icon icon-easy"></i>;
  
    case 'CSS':
      return <i className="icon icon-css"></i>;

    case 'C#':
      return <i className="icon icon-csharp"></i>;
  
     case 'C':
      return <i className="icon icon-c"></i>;
    
    case 'React':
      return <i className="icon icon-react"></i>;

    case 'SQL':
      return <i className="icon icon-mysql"></i>;
  
    case 'Node.js':
      return <i className="icon icon-node"></i>;

    case 'Git':
      return <i className="icon icon-git"></i>;

    case 'Python':
      return <i className="icon icon-python"></i>;

    case 'Raspbian':
      return <i className="icon icon-css"></i>;

    case 'Linux':
      return <i className="icon icon-css"></i>;

    case 'PHP':
      return <i className="icon icon-css"></i>;
      
    // add more cases for other tech
    default:
      return <i className="fas fa-code"></i>;
  }
}

function ImageCarousel(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((currentImageIndex - 1 + props.images.length) % props.images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % props.images.length);
  };

  return (
    <div className="image-carousel">
      <img className="popup-img" src={props.images[currentImageIndex]} alt={`Extra ${currentImageIndex + 1}`} />
      <div className="carousel-buttons">
        <button onClick={handlePrevious}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
}


function renderExtra(extraImages) {
  if (Array.isArray(extraImages)) {
    return <ImageCarousel images={extraImages} />;
  } else {
    if (typeof extraImages === "string" && (extraImages.startsWith("http://") || extraImages.startsWith("https://") || /\.(jpe?g|png|gif)$/i.test(extraImages))) {
      return <img className="popup-img" src={extraImages} alt="Extra" />;
    } else {
      return <span>{extraImages}</span>;
    }
  }
}



function Popup(props) {
  const { onClose, label } = props;

  let title, content, description, tech, main, extra1, extra2, extra3, extra4, extra5;

  switch(label) {
    case 'Sign-to-Speech Glove':
      title = 'Sign-to-Speech Glove';
      content = '"because not everyone knows sign language"';
      description = "The sign-to-speech glove project is an individual project that integrates the electronics skills learned in the entirety of the computer engineering technology course. ";
      tech = ['PHP', 'Python', 'HTML', 'CSS', 'SQL', 'JavaScript', 'KiCAD'];
      main = "The purpose of the project was to provide a form of communication for those who hearing impaired and want to communicate to those who have no knowledge of sign language. Below are pictures of the projects schematics, results, and etc.";
      extra1 = ["/images/p1/p1-init.png", "/images/p1/p1-schm.png", "/images/p1/p1-pcb.png", "/images/p1/p1-1.png", "/images/p1/p1-2.png", "/images/p1/p1-3.png"]
      extra2 = "The Process";
      extra3 = "Coding of the project was done in Python, the readings of the sensors on the glove was transmitted to the microcontroller and then data was sent to a local server set up with Apache, saving data on a MySQL database. A front-end server coded in PHP then pulls that data from the MySQL database in real-time, showing the results on the website. Alternatively, the results also show on the on-board LCD attached to the user's forearm.";
      extra4 = "Data saved was then interpreted based on the input of the sensors which were then matched to another table. If a match occurs, the program will output the matching result. A text-to-speech program processes the result, outputting the result to a connected bluetooth speaker, ultimately converting sign language into speech.";
      extra5 = "";
      break;
    case 'Inventory System Application':
      title = 'Inventory System Application';
      content = 'UI Design Final Project';
      tech = ['C#', 'SQL'];
      extra1 = ["/images/p2/p2-cust.png", "/images/p2/p2-empl.png", "/images/p2/p2-graph1.png", "/images/p2/p2-graph2.png"]
      description = "This retail inventory system is a comprehensive software solution that I designed and developed to streamline inventory management and sales processes for businesses of all sizes.";
      extra2 = "The Process";
      extra3 = "In order to ensure that the user is able to navigate the interface that I developed, an extensive UI roadmap was created so that we can cover all the bases of the system. The flowchart shown above identifies each route the user will take once they use the system.";
      extra4 = " Given this, the whole program was done on C# WPF with emphasis on using data structures and algorithms to make them work. The data for the inventory system was saved on a SQLite server, referenced each time the customer checks out, signs out or cancels their order. The same goes for the employee side when they perform any CRUD operation, synchronizing data in real time."
      break;

    case 'IoT Weathering System':
      title = 'IoT Weathering System';
      content = 'Getting to Know Microcontrollers';
      tech = ['C', 'STM32', 'PHP', 'HTML', 'CSS', 'JavaScript','SQL'];
      extra2 = "The Process";
      extra1 = ["/images/p3/p3-2.png", "/images/p3/p3-3.png", "/images/p3/p3-4.png"];
      extra3 = "This project integrates the use of a STM32 microcontroller to collect sensor data and transmit it over the internet. The firmware for the microcontroller is coded with C. Hosting it's own TCP server, data collected was sent through packets to a TCP client where it saves received items to a SQLite database.";
      extra4 = "A front-end web server set up in PHP is then used to display the data to the users, extracted from the database and interpreted to a graph using Chart.js, as seen above."
      description = "This IoT Weathering System makes use of the STM32 IoT microcontroller, it is integrated with a Wi-Fi module where it utilizes it's onboard sensors to read the temperature, humidity and pressure of it's surroundings, then displaying results on a webserver."
      break;

    case 'Variable Power Supply':
      title = 'Variable Power Supply';
      content = '"every project needs power"';
      description  = "This project integrates the use of different electronics and putting them together to create a variable power supply. This power supply can output 0-12V of power in which the current and voltage may be regulated with the knobs. "
      extra2 = "The Process";
      extra3 = "It all started with learning how a power supply works, as we can see from the block diagram above, an AC input signal is taken from the wall plug and then it runs through a series of different processes through the transformer, rectifier, filter and lastly the voltage regulator.";
      extra4 = "Once an understanding has been made, a schematic diagram is made, then later tested in Multisim to verify the functionality. Once the schematic diagram was solid, it was time to construct the circuit in practical application. On the chassis itself, we can see that there are two boards, these both function the same. It was just used to compare if the functionality of the practical application worked with the actual one, the green board is a PCB and the yellow board is where the circuit diagram was followed.  ";
      extra5 = "Overall, this was a fun project to make an having your own at-home power supply is definitely a must! Especially if it doesn't explode. :)"
      extra1 = ["/images/p4/p4-1.png", "/images/p4/p4-11.png", "/images/p4/p4-3.png", "/images/p4/p4-4.png", "/images/p4/p4-5.png"];
      tech = ['Soldering', 'Schematic Diagram Implementation', 'Instrumentation Troubleshooting'];
      break;

    case 'Personal Website':
      title = 'Personal Website';
      content = '"where do I put all of these?"';
      description = "Online portfolio made by Arvyn Cabrera. Version 1.0.";
      main = "To be honest, I've always liked designing stuff on the internet. When I was twelve, I used to mess around with my MySpace profile and make it look as cool as possible. Little did I know that I was actually learning HTML and CSS on the side when I just thought <style></style> was just something normal you had to do in order to add flare to your online profile.";
      extra1 = "In any case, I've decided to create my own website profile from scratch, in a way that I think it would look as cool as possible. Initially, I used to play around with Wordpress and other block builders for developing websites, but I told myself that I wanted to create something on my own. Something that I would be proud of looking at.";
      extra3 = "So, here it is! Welcome to my online portfolio that I did on React from scratch. Hope you enjoy! :)";
      tech = ['React', 'HTML', 'CSS', 'JavaScript'];
      break;
      
    default:
      title = '';
      content = '';
  }

  return (

    <div className="popup-wrapper" onClick={onClose}>
      <div className="popup" onClick={(event) => event.stopPropagation()}>
        <div className="popup-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>X</button>
        </div>
        <div className="popup-content">
          <h1>{content}</h1>
        </div>
        <div className="popup-description">
        <p>{description}</p>
        </div>
        <h2 className = "popup-tech"> Technologies/Skills used </h2>
        <div className = "icon-list-container2">
        <ul className="icon-list2">
          {tech.map((item, index) => (
            <li className = "icon" key={index}>
              {getTechIcon(item)}
              {item}
            </li>
          ))}
        </ul>
        </div>
        <div className="popup-description">
        <p>{main}</p>
        </div>
        <div className="popup-description">
        <p>{renderExtra(extra1)}</p>
        </div>
        <div className="popup-description">
        <h2>{renderExtra(extra2)}</h2>
        </div>
        <div className="popup-description">
        <p>{renderExtra(extra3)}</p>
        </div>
        <div className="popup-description">
        <p>{renderExtra(extra4)}</p>
        </div>
        <div className="popup-description">
        <p>{renderExtra(extra5)}</p>
        </div>


      </div>
    </div>
  );
}

export default Popup;
