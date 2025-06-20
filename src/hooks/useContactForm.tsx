
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Updated EmailJS configuration with correct credentials
  const SERVICE_ID = 'service_opymo3h';
  const TEMPLATE_ID = 'template_yjy5af4';
  const PUBLIC_KEY = '50b332Didiva-85T7';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    console.log("Form data before sending:", formData);
    console.log("EmailJS config:", { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });

    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      // Initialize EmailJS with the public key
      emailjs.init(PUBLIC_KEY);
      
      console.log("Sending email using EmailJS send() method...");
      
      // Use the more robust send() method instead of sendForm()
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_name: 'Varsha',
        },
        PUBLIC_KEY
      );

      console.log("EmailJS success:", result);

      // Show success message
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error("EmailJS detailed error:", error);
      
      // More specific error handling
      let errorMessage = "Failed to send message. Please try again or contact me directly at varshatewatia2204@gmail.com.";
      
      if (error instanceof Error) {
        console.error("Error message:", error.message);
        console.error("Error details:", (error as any).text || (error as any).status);
        
        // Check for specific EmailJS errors
        if ((error as any).status === 404) {
          errorMessage = "Email service configuration error. Please contact me directly at varshatewatia2204@gmail.com.";
        } else if ((error as any).status === 400) {
          errorMessage = "Invalid email template. Please contact me directly at varshatewatia2204@gmail.com.";
        } else if ((error as any).status === 401) {
          errorMessage = "Email authentication error. Please contact me directly at varshatewatia2204@gmail.com.";
        }
      }
      
      // Show user-friendly error message
      toast({
        title: "Message Failed to Send",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return {
    formData,
    isLoading,
    handleSubmit,
    handleChange
  };
};
