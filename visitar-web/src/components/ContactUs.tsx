import { useState } from "react";
import axios from "axios";
const ContactUs: React.FC = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submitData = async () => {
        console.log(name, email, message);
        const formData = {
            name: name,
            email: email,
            message: message
        }
        try {
            await axios.post('http://localhost:8000/api/sendMessage', formData);
            window.location.reload();
        } catch (error) {
            console.error('There was an error!', error);
        }  

    }

    return (
      <>
         <section className="bg-pri flex flex-col sm:flex-row justify-around">
              <div className="text-center lg:mx-auto mx-16 py-12 sm:py-20 lg:py-32 flex flex-col">
                  <h6 className="text-xl md:text-2xl lg:text-5xl text-white font-title">Have any questions - Contact us here!</h6>
                  <input type="text" placeholder="Name" className="my-4 text-md md:text-xl px-2 py-3 md:py-4 w-full rounded-lg shadow-md" onChange={(e) => setName(e.target.value)}/>
                  <input type="text" placeholder="Email" className="my-4 text-md md:text-xl px-2 py-3 md:py-4 w-full rounded-lg shadow-md" onChange={(e) => setEmail(e.target.value)}/>
                  <textarea className="my-4 text-md md:text-xl px-2 py-3 md:py-4 w-full rounded-lg shadow-md " placeholder="Message" rows={6} onChange={(e) => setMessage(e.target.value)}></textarea>
                  <button className="my-4 text-md md:text-xl px-2 py-3 md:py-4 w-full rounded-lg shadow-md bg-white text-pri" onClick={submitData}>Submit</button>
              </div>
              </section>
      </>
    );
  };
  
  export default ContactUs;
  