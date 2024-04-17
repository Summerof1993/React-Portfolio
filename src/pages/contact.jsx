export default function Contact() {
    return (
      <form id="contact" className="contact-form">
      <h2>Hi! You can contact me at Alejandrorodriguez309@gmail.com
        or reach me on <a href="https://www.linkedin.com/in/alejandro-rodriguez-897207104?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>
      </h2>
      <h2>
          You can also contact me by filling out the form below!
      </h2>

      <p className="justifying-content">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" placeholder="First Name, Last Name"/>
      </p>

      <p className="justifying-content">
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" placeholder="me@example.com"/>
      </p>

      <p className="justifying-content">   
      <label htmlFor="message">Message:</label>
      <textarea id="message" placeholder="Please write your message here"></textarea>
      </p>
      <div className="buttonDiv">
      <button className="contact-form-button">Submit</button>
      </div>
      </form>
    );
  }