import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Send, 
  MessageCircle, 
  Mail, 
  Phone, 
  Upload,
  Clock,
  Shield,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ParticleCanvas } from '@/components/ParticleCanvas';
import { useToast } from '@/hooks/use-toast';
import { insertContactSchema } from '@shared/schema';

const contactFormSchema = insertContactSchema;

type ContactFormData = z.infer<typeof contactFormSchema>;

const serviceOptions = [
  { value: 'exam-docs', label: 'Exam Documentation' },
  { value: 'up-scholarship', label: 'UP Scholarship Processing' },
  { value: 'udise', label: 'UDISE+ Data Management' },
  { value: 'govt-projects', label: 'Government Projects' },
  { value: 'daily-support', label: 'Daily Digital Support' },
  { value: 'video-editing', label: 'Video Editing' },
  { value: 'branding', label: 'Branding & Design' },
  { value: 'motion-graphics', label: 'Motion Graphics' },
  { value: 'content-strategy', label: 'Content Strategy' },
  { value: 'other', label: 'Other / Multiple Services' },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      organization: '',
      service: '',
      message: '',
      urgent: false,
    },
  });

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setIsSuccess(true);
      toast({
        title: 'Message Sent',
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try WhatsApp instead.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative min-h-screen">
      <ParticleCanvas mode="corporate" density={40} />

      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-foreground">Get In </span>
            <span className="gold-text">Touch</span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to start your project? Have questions? 
            We're here to help. Reach out through any channel below.
          </motion.p>
        </div>
      </section>

      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="p-6 lg:p-8">
                  <h2 className="text-xl font-semibold text-foreground mb-6">Send a Message</h2>

                  {isSuccess ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Message Received</h3>
                      <p className="text-muted-foreground mb-6">
                        We'll review your inquiry and respond within 24 hours.
                      </p>
                      <Button onClick={() => setIsSuccess(false)} variant="outline">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Your name" 
                                    {...field} 
                                    data-testid="input-name"
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
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="email" 
                                    placeholder="your@email.com" 
                                    {...field} 
                                    data-testid="input-email"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone (Optional)</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="+91 98765 43210" 
                                    {...field} 
                                    value={field.value || ''}
                                    data-testid="input-phone"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="organization"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Organization (Optional)</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="School / Company name" 
                                    {...field} 
                                    value={field.value || ''}
                                    data-testid="input-organization"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service Needed</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-service">
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {serviceOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                      {option.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Describe your project or inquiry..."
                                  className="min-h-[120px]"
                                  {...field}
                                  data-testid="textarea-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="urgent"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value || false}
                                  onCheckedChange={field.onChange}
                                  data-testid="checkbox-urgent"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="cursor-pointer">
                                  This is an urgent request
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full gold-glow gap-2"
                          disabled={isSubmitting}
                          data-testid="button-submit-contact"
                        >
                          {isSubmitting ? (
                            <>Sending...</>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  )}
                </Card>
              </motion.div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="p-6 bg-gradient-to-br from-green-500/10 to-card border-green-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-green-500/10">
                      <MessageCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">WhatsApp Support</h3>
                      <p className="text-sm text-muted-foreground">Fastest response</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    For quick queries, document sharing, or urgent support, 
                    WhatsApp is our most responsive channel.
                  </p>
                  <a 
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700"
                      data-testid="button-whatsapp-contact"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Open WhatsApp
                    </Button>
                  </a>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Upload className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Client Upload Vault</h3>
                      <p className="text-sm text-muted-foreground">Secure file sharing</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    For large files and confidential documents, use our 
                    secure Google Drive upload folder.
                  </p>
                  <a 
                    href="https://drive.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full" data-testid="button-upload-vault">
                      <Upload className="w-4 h-4 mr-2" />
                      Open Upload Vault
                    </Button>
                  </a>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Contact Details</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Mail className="w-4 h-4 text-primary" />
                      <a href="mailto:contact@quickserveit.online" className="hover:text-foreground transition-colors">
                        contact@quickserveit.online
                      </a>
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>Response within 24 hours</span>
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>Secure & confidential</span>
                    </li>
                  </ul>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
