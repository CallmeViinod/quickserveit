import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Terms() {
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
              Terms of Service
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
                <h2 className="text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using Quickserve IT services, you accept and agree to be bound 
                  by the terms and provisions of this agreement. If you do not agree to these terms, 
                  please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">2. Services Description</h2>
                <p>
                  Quickserve IT provides institutional technology services including documentation, 
                  portal management, and digital support, as well as creative production services 
                  including video editing, branding, and motion graphics.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">3. Service Delivery</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Delivery timelines are estimates and may vary based on project complexity.</li>
                  <li>Urgent requests may incur additional charges.</li>
                  <li>Revisions are included as specified in your service agreement.</li>
                  <li>Final deliverables will be provided in agreed-upon formats.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">4. Payment Terms</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pricing is provided on a per-project or retainer basis as agreed.</li>
                  <li>Payment terms will be specified in individual quotes.</li>
                  <li>Additional work beyond scope may require additional payment.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">5. Confidentiality</h2>
                <p>
                  We treat all client materials, documents, and information with strict confidentiality. 
                  Your data will not be shared with third parties except as required for service delivery 
                  or by law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
                <p>
                  Upon full payment, clients receive full rights to deliverables created specifically 
                  for their project. Pre-existing materials, tools, and templates remain the property 
                  of Quickserve IT.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
                <p>
                  Quickserve IT's liability is limited to the amount paid for services. We are not 
                  liable for indirect, consequential, or incidental damages.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">8. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Continued use of our 
                  services after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">9. Contact</h2>
                <p>
                  For questions about these terms, please contact us at contact@quickserveit.online.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
