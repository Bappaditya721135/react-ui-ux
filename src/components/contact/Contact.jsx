import React, {useState} from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "", email: "", message: ""
    });

    // when form is submited 
    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    console.log(formData)

    // input chnage handler 
    const handleInputChange = (e) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value,
            }
        })
    }



  return (
    <div className="contact-section">

        <main>
            <h1>contact Us</h1>
            <form className="contact__form" onSubmit={handleFormSubmit}>
                <div className="form__group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        placeholder="name" 
                        required 
                        onChange={handleInputChange} 
                        value={formData.name}
                        />
                </div>
                <div className="form__group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        placeholder="email" 
                        required 
                        onChange={handleInputChange} 
                        value={formData.email}
                        />
                </div>
                <div className="form__group">
                    <label htmlFor="message">Message</label>
                    <input 
                        type="text" 
                        id="message" 
                        name="message"
                        placeholder="message" 
                        required 
                        onChange={handleInputChange} 
                        value={formData.message}
                        />
                </div>
                <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  )
}
