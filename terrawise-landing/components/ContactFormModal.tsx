'use client';

import { useState, ReactNode } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

interface ContactFormModalProps {
  trigger?: ReactNode;
}

export function ContactFormModal({ trigger }: ContactFormModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('contact_form_responses')
        .insert([formData]);

      if (error) throw error;

      toast.success('Thank you for your interest! We\'ll be in touch soon.');
      setIsOpen(false);
      setFormData({ name: '', email: '', company: '' });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || <Button variant="default">Contact Us</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white text-charcoal">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-charcoal">Get in Touch</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-charcoal">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-white border-charcoal/20 text-charcoal placeholder:text-charcoal/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-charcoal">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-white border-charcoal/20 text-charcoal placeholder:text-charcoal/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company" className="text-charcoal">Company</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              required
              className="bg-white border-charcoal/20 text-charcoal placeholder:text-charcoal/50"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-charcoal hover:bg-charcoal/90 text-white" 
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
} 