
import React, { useState, useEffect } from 'react';
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import LoadingButton from '@/components/common/LoadingButton';

// Define the form schema with zod
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const RATE_LIMIT = {
  maxAttempts: 3,
  windowMs: 60 * 60 * 1000, // 1 hour
};

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [nextAllowedTime, setNextAllowedTime] = useState<number | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

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
  
  const onSubmit = (data: ContactFormValues) => {
    // Check for rate limiting
    if (isRateLimited()) return;
    
    setIsSubmitting(true);
    
    // Simulating a form submission
    setTimeout(() => {
      updateRateLimit();
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };
  
  const isFormDisabled = isSubmitting || (nextAllowedTime && Date.now() < nextAllowedTime);
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm mb-1 font-mono">
                Name
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder="Your name"
                  disabled={isFormDisabled}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm mb-1 font-mono">
                Email
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  type="email" 
                  placeholder="Your email"
                  disabled={isFormDisabled}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm mb-1 font-mono">
                Message
              </FormLabel>
              <FormControl>
                <Textarea 
                  {...field}
                  className="min-h-[120px]"
                  placeholder="Your message"
                  disabled={isFormDisabled}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <LoadingButton 
          type="submit"
          isLoading={isSubmitting}
          loadingText="Sending..."
          disabled={isFormDisabled}
        >
          Send Message
        </LoadingButton>
        
        {attempts > 0 && attempts < RATE_LIMIT.maxAttempts && (
          <p className="text-xs text-muted-foreground mt-2">
            You have {RATE_LIMIT.maxAttempts - attempts} submission{(RATE_LIMIT.maxAttempts - attempts) !== 1 ? 's' : ''} remaining.
          </p>
        )}
      </form>
    </Form>
  );
};

export default ContactForm;
