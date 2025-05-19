
import React, { useState, useEffect } from 'react';
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const RATE_LIMIT = {
  maxAttempts: 3,
  windowMs: 60 * 60 * 1000, // 1 hour
};

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [nextAllowedTime, setNextAllowedTime] = useState<number | null>(null);

  // Load attempt data from localStorage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem('contactFormLimit');
    if (storedData) {
      const { attempts: storedAttempts, nextAllowedTime: storedTime } = JSON.parse(storedData);
      setAttempts(storedAttempts);
      setNextAllowedTime(storedTime);
    }
  }, []);

  const updateRateLimit = () => {
    const newAttempts = attempts + 1;
    const newNextAllowedTime = newAttempts >= RATE_LIMIT.maxAttempts
      ? Date.now() + RATE_LIMIT.windowMs
      : null;
      
    setAttempts(newAttempts);
    setNextAllowedTime(newNextAllowedTime);
    
    // Store rate limit data in localStorage
    localStorage.setItem('contactFormLimit', JSON.stringify({
      attempts: newAttempts,
      nextAllowedTime: newNextAllowedTime,
    }));
  };
  
  const isRateLimited = () => {
    if (nextAllowedTime && Date.now() < nextAllowedTime) {
      const waitMinutes = Math.ceil((nextAllowedTime - Date.now()) / (60 * 1000));
      toast({
        title: "Too many requests",
        description: `Please try again in approximately ${waitMinutes} minute${waitMinutes > 1 ? 's' : ''}.`,
        variant: "destructive",
      });
      return true;
    }
    
    // Reset rate limit if the cooldown period has passed
    if (nextAllowedTime && Date.now() >= nextAllowedTime) {
      setAttempts(0);
      setNextAllowedTime(null);
      localStorage.setItem('contactFormLimit', JSON.stringify({
        attempts: 0,
        nextAllowedTime: null,
      }));
    }
    
    return false;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check for rate limiting
    if (isRateLimited()) return;
    
    // Basic form validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulating a form submission
    setTimeout(() => {
      updateRateLimit();
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Clear form
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm mb-1 font-mono">
          Name
        </label>
        <Input 
          type="text" 
          id="name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="pg-form-input" 
          placeholder="Your name" 
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm mb-1 font-mono">
          Email
        </label>
        <Input 
          type="email" 
          id="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pg-form-input" 
          placeholder="Your email" 
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm mb-1 font-mono">
          Message
        </label>
        <Textarea 
          id="message" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="pg-form-input min-h-[120px]" 
          placeholder="Your message" 
        />
      </div>
      
      <Button 
        type="submit"
        className="pg-button"
        disabled={isSubmitting || (nextAllowedTime && Date.now() < nextAllowedTime)}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
      
      {attempts > 0 && attempts < RATE_LIMIT.maxAttempts && (
        <p className="text-xs text-muted-foreground mt-2">
          You have {RATE_LIMIT.maxAttempts - attempts} submission{(RATE_LIMIT.maxAttempts - attempts) !== 1 ? 's' : ''} remaining.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
