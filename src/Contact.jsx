import React, { useState, useEffect } from "react";
import { Container, Form } from "semantic-ui-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    setIsSubmitted(true);
    e.preventDefault();
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "+" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  useEffect(() => {
    if (isSubmitted) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact-form", ...formData }),
      })
        .then(() => alert("Success!"))
        .then(() => setIsSubmitted(false))
        .then(() => setFormData({ name: "", email: "", message: "" }))
        .catch((error) => alert(error));
    }
  }, [formData, isSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} netlify name="contact-form">
        <Form.Field>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Your name"
          />
        </Form.Field>
        <Form.Field>
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
          />
        </Form.Field>
        <Form.TextArea
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="What's on your mind?"
        />
        <Form.Button type="submit">Send</Form.Button>
      </Form>
    </Container>
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
//     debugger;
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
//     const { name, email, message } = this.state;
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
//             value={message}
//             onChange={this.handleChange}
//           />
//           <Button type="submit">Send</Button>
//         </Form>
//       </Container>
//     );
//   }
// }

// export default ContactForm;
