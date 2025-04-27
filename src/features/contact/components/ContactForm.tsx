
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm mb-1 font-mono">
          Name
        </label>
        <input type="text" id="name" className="pg-form-input" placeholder="Your name" />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm mb-1 font-mono">
          Email
        </label>
        <input type="email" id="email" className="pg-form-input" placeholder="Your email" />
      </div>
      
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm mb-1 font-mono">
          Message
        </label>
        <textarea id="message" className="pg-form-input min-h-[120px]" placeholder="Your message" />
      </div>
      
      <button type="button" className="pg-button">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
