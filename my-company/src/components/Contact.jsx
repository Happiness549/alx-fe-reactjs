
 import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    console.log('Form submitted:', formData);

    

    
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div style={{ padding: '20px', backgroundColor: 'beige', minHeight: '80vh', color: 'black' }}>
      <h1>Contact Us</h1>

      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%', minHeight: '100px' }}
        />

        {/* ✅ Button type should be submit */}
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Send
        </button>
      </form>

      
      <div style={{ marginTop: '20px' }}>
        <h3>Form Data</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Message:</strong> {formData.message}</p>
      </div>
    </div>
  );
}

export default Contact;

 
 
 
 
 
 
 
 
 
