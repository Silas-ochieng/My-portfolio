import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you could integrate with an email service or backend
    setSubmitted(true);
  };

  return (
    <section className="contact-section">
      <p className="contact-info">
        Email:{" "}
        <a href="mailto:kiirusarah222@gmail.com">kiirusarah222@gmail.com</a>
        <br />
        Location: Mombasa, Kenya
        <br />
        GitHub:{" "}
        <a
          href="https://github.com/Nyambura20"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/Nyambura20
        </a>
        <br />
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/sarah-kiiru-a3a41a310
"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.linkedin.com/in/sarah-kiiru-a3a41a310
        </a>
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          className="contact-input"
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="contact-input"
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="contact-textarea"
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button className="contact-btn" type="submit">
          Send Message
        </button>
      </form>
      {submitted && (
        <p className="contact-success">
          Thank you for reaching out! I'll get back to you soon.
        </p>
      )}
    </section>
  );
}

export default Contact;
