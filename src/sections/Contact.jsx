import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import emailjs from "@emailjs/browser"

const Contact = () => {
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: "",
        email: "",
        message:"",
    })

const handleChange = ({target: {name, value}}) => {
    setForm({...form,[name]: value})
}

const handleSubmit = async (e) => {
   e.preventDefault();

   setLoading(true);

   try {
       await emailjs.send(
         "service_ubr26yn",
         "template_o50mlf7",
         {
         from_name: form.name,
         to_name: "Oleg",
         from_email: form.email, 
         to_email: "info@olegbekker.com",
         message: form.message,
     },
    "LBfILfr5uzDpqd0KT"
)
     setLoading(false)
     alert("Your message has been send.")

     setForm(  {
        name:"",
        email:"",
        message:"",
     } )
    
} catch (error) {
 setLoading(false)
 console.log(error)
 alert("Something went wrong")
}}

  return (
    <section className='c-space my-20' id='contact'>
     <div className='relative min-h-screen flex items-center 
     justify-center flex-col'>
        <img src="/assets/blender viewport.png" alt="terminal background" 
        className='absolute inset-0 w-full h-full object-cover'/>
        <div className='contact-container'>
         <h3 className='head-text'>Contact</h3>
         <p className='text-lg text-white-600 mt-3'> Please I need a job </p>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex-col space-y-7'>

            <label className='space-y-3'>
                <span className='field-label'>
                    Full Name
                </span>
                <input type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className='field-input'
                placeholder='Steve Jobs'/>
            </label>

            <label className='space-y-3'>
                <span className='field-label'>E-Mail
                </span>
                <input type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className='field-input'
                placeholder='steve@gmail.com'/>
            </label>

            <label className='space-y-3'>
                <span className='field-label'>
                    Your Message
                </span>
                <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className='field-input'
                placeholder='I want to hire you.'/>
            </label>

            <button className='field-btn' type="submit" disabled={loading}>

                {loading ? "Sending..." : "Send Message"}

                <img src='/assets/Arrow_up.svg' alt="arrow-up" className='field-btn_arrow'/>

            </button>

        </form>
        </div>
     </div>   
    </section>
  )
}

export default Contact