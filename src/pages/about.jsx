import meImage from "../assets/images/me.jpg"

export default function About() {
    return (
      <div className="pagesDiv">
        <img className="image" src={meImage} alt="Picture of Alejandro Rodriguez"/>
        <p>Hello! My name is Alejandro Rodriguez. I am a Software Developer residing in Los Angeles. I hold
          a Bachelors of Science in Business Management from the University of California, Northridge as well
          as an Associates in Physics. I recently graduated from a Full-Stack Coding Bootcamp program at the
          University of Minessota where I learned front-end and back-end technologies. I am versatile in
          HTML, CSS, Javascript, React, and Bootstrap for the front end and Mongo DB, SQL, Sequelize, Mongoose, 
          Node JS, and Express JS for the back-end. 
        </p>
        <p>
          In my free time, you can find me hiking, playing beach volleyball, going on road trips, traveling, 
          wine tasting, or at the gym! When not active, I enjoy reading a book on personal growth or working
          on full-stack applications. I'm also a cat dad to 3 cats! 
        </p>
      </div>
    );
  }