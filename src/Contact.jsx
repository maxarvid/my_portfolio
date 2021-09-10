import React, { useState } from "react";
import { Container, Form } from "semantic-ui-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
    e.preventDefault();
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "+" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} netlify name="contact">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          Your Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          Your Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          Message:
          <textarea
            name="message"
            // value={message}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>

    // <Container>
    //   <Form onSubmit={handleSubmit} netlify name="contact">
    //     <input type="hidden" name="form-name" value="contact" />
    //     <Form.Field>
    //       <label>Your Name</label>
    //       <input
    //         type="text"
    //         name="name"
    //         onChange={handleChange}
    //         value={formData.name}
    //         placeholder="Your name"
    //       />
    //     </Form.Field>
    //     <Form.Field>
    //       <label>Your Email</label>
    //       <input
    //         type="email"
    //         name="email"
    //         value={formData.email}
    //         onChange={handleChange}
    //         placeholder="Your email"
    //       />
    //     </Form.Field>
    //     <Form.TextArea
    //       label="Message"
    //       name="message"
    //       // value={formData.message}
    //       onChange={handleChange}
    //       placeholder="What's on your mind?"
    //     />
    //     <Form.Button type="submit">Send</Form.Button>
    //   </Form>
    // </Container>
  );
};

export default ContactForm;

// import React, { Component } from "react";
// import { Container, Form, Button, TextArea } from "semantic-ui-react";

// const encode = (data) => {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// };

// class ContactForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "", email: "", message: "" };
//   }

//   handleSubmit = (e) => {
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({ "form-name": "contact", ...this.state }),
//     })
//       .then(() => alert("Success!"))
//       .catch((error) => alert(error));
//     e.preventDefault();
//   };

//   handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

//   render() {
//     const { name, email } = this.state;
//     return (
//       <Container>
//         <Form onSubmit={this.handleSubmit} netlify name="contact">
//           <input type="hidden" name="form-name" value="contact" />
//           <Form.Field>
//             <label>Your Name</label>
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//               placeholder="Your name"
//             />
//           </Form.Field>
//           <Form.Field>
//             <label>Your Email</label>
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//               placeholder="name@example.com"
//             />
//           </Form.Field>
//           <Form.Field
//             label="Message"
//             control={TextArea}
//             placeholder="What's on your mind?"
//             // value={message}
//             onChange={this.handleChange}
//           />
//           <Button type="submit">Send</Button>
//         </Form>
//       </Container>
//     );
//   }
// }

// export default ContactForm;
