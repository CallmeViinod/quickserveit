import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Privacy() {
  return (
    <div className="relative min-h-screen">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">
              <Button variant="ghost" size="sm" className="mb-6 gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>

            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: December 2024
            </p>
          </motion.div>

          <motion.div
            className="prose prose-invert max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                <p className="mb-4">We collect information you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information (email, phone, organization)</li>
                  <li>Project details and requirements</li>
                  <li>Documents and files you share for service delivery</li>
                  <li>Communication history</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To deliver requested services</li>
                  <li>To communicate about your projects</li>
                  <li>To improve our services</li>
                  <li>To send relevant updates (with your consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">3. Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your data. 
                  Confidential documents are handled with strict protocols and are not shared 
                  with unauthorized parties.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">4. Data Retention</h2>
                <p>
                  We retain project files for a reasonable period after completion to facilitate 
                  revisions or future work. Upon request, we can delete your data from our systems.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">5. Third-Party Services</h2>
                <p>
                  We may use third-party tools for communication (WhatsApp), file storage (Google Drive), 
                  and project management. These services have their own privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">6. Your Rights</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data we hold</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">7. Cookies</h2>
                <p>
                  Our website may use essential cookies for functionality. We do not use 
                  tracking cookies for advertising purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">8. Contact Us</h2>
                <p>
                  For privacy-related inquiries, please contact us at contact@quickserveit.online.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
