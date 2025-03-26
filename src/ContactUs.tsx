
import { RefObject } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  contactInView: boolean | RefObject<HTMLElement>;
}

function ContactForm({ contactInView }: ContactFormProps) {
  const [state, handleSubmit] = useForm("mdkaqgqe");

  return (
    <motion.section
      ref={typeof contactInView !== 'boolean' ? contactInView : undefined}
      className="py-8 bg-purple-900 text-white"
      initial={{ opacity: 0 }}
      animate={contactInView ? { opacity: 1 } : {}}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-[#FFD700]">
          <motion.h2 
            className="text-4xl font-bold mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={contactInView ? { y: 0, opacity: 1 } : {}}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-xl text-purple-200 mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={contactInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Transform your digital presence today. Let's create something amazing together.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={contactInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-2xl"
          >
            {state.succeeded ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-900 py-8"
              >
                <h3 className="text-2xl font-bold text-purple-600 mb-4">Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you soon!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="px-4 py-3 rounded-lg bg-gray-200 text-gray-900"
                  required
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="px-4 py-3 rounded-lg bg-gray-200 text-gray-900"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 md:col-span-2 text-left" />
                
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  placeholder="Your Message"
                  className="px-4 py-3 rounded-lg bg-gray-200 text-gray-950 md:col-span-2"
                  rows={4}
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 md:col-span-2 text-left" />
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={state.submitting}
                  className="mx-auto bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold md:col-span-2 flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors disabled:bg-purple-400"
                >
                  {state.submitting ? "Sending..." : "Send Message"} <Mail className="w-5 h-5" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactForm;