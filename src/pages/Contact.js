import {useRef} from "react";
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    //send contact formData here via emailjs
    emailjs.sendForm('service_tmrmhvc', 'template_933z5jo', form.current, 'user_K1QVDNwKvOMOLEQRBDCkJ')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
    
    e.target.reset()
  }

  return (
    <section className="contact" id='contact'>
      <div className='form-container'>
        <form ref={form} onSubmit={handleSubmit} name="contact">
          <h2>
            Let's chat!
          </h2>
          <p>
            Please fill out the fields below and submit to send me an email and I'll get back to you shortly.
          </p>
          <div >
            <label htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div >
            <label htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div>
            <label htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
            />
          </div>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact