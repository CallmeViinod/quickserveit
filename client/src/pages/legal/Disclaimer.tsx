import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Disclaimer() {
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
              Disclaimer
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
                <h2 className="text-xl font-semibold text-foreground mb-4">General Information</h2>
                <p>
                  The information provided on this website is for general informational purposes only. 
                  All information on the site is provided in good faith, however, we make no representation 
                  or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, 
                  reliability, availability, or completeness of any information on the site.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">Service Limitations</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Quickserve IT provides technology and creative services as described. 
                    Results may vary based on project scope and client requirements.
                  </li>
                  <li>
                    We are not affiliated with any government body, educational board, or 
                    regulatory authority.
                  </li>
                  <li>
                    Our services assist with documentation and processes but do not guarantee 
                    specific outcomes with government portals or official systems.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">Professional Advice</h2>
                <p>
                  The site cannot and does not contain professional advice. The information is 
                  provided for general informational and educational purposes only and is not a 
                  substitute for professional advice. Before taking any actions based upon such 
                  information, we encourage you to consult with appropriate professionals.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">External Links</h2>
                <p>
                  The site may contain links to external websites that are not provided or maintained 
                  by or in any way affiliated with Quickserve IT. Please note that we do not guarantee 
                  the accuracy, relevance, timeliness, or completeness of any information on these 
                  external websites.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">Errors and Omissions</h2>
                <p>
                  While we have made every attempt to ensure that the information contained on this 
                  site is accurate, we are not responsible for any errors or omissions, or for the 
                  results obtained from the use of this information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">Fair Use</h2>
                <p>
                  This site may contain copyrighted material, the use of which may not have been 
                  specifically authorized by the copyright owner. We are making such material 
                  available in an effort to advance understanding of our services. This constitutes 
                  a 'fair use' of any such copyrighted material.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">Consent</h2>
                <p>
                  By using our website, you hereby consent to our disclaimer and agree to its terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">Contact</h2>
                <p>
                  For any questions regarding this disclaimer, please contact us at contact@quickserveit.online.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
