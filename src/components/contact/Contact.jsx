import "./contact.scss";

export default function contact() {
  return (
    <div className="contact" id="contact">
      <h2>Say Hi ! </h2>
      <div className="contact-form">
        <form action="https://formspree.io/f/mayadvjk" method="POST">
          <input
            type="hidden"
            name="_subject"
            value="Contact request from personal website"
          />
          <input
            type="email"
            name="_replyto"
            placeholder="Your email"
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
