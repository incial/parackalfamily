import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Heart, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="w-full bg-zinc-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-wider leading-tight">
            Share Your Memories
          </h2>
          <div className="w-16 sm:w-24 h-px bg-black mx-auto mb-4 sm:mb-6"></div>
          <p className="font-sans text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed px-2">
            We invite you to share your cherished memories, stories, and condolences with the Parackal family during this time of remembrance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="bg-white border-zinc-200 shadow-xl">
            <CardHeader className="text-center pb-4 sm:pb-6">
              <CardTitle className="font-display text-xl sm:text-2xl font-bold text-black flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                <span>Contact the Family</span>
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-zinc-50 p-4 sm:p-6 rounded-lg border border-zinc-200"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-black">Email Us</h3>
                      <p className="text-zinc-600 text-xs sm:text-sm">Send your condolences</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm sm:text-base"
                    asChild
                  >
                    <a href="mailto:hello@parackalfamily.com">
                      hello@parackalfamily.com
                    </a>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-zinc-50 p-4 sm:p-6 rounded-lg border border-zinc-200"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-black">Share Stories</h3>
                      <p className="text-zinc-600 text-xs sm:text-sm">Tell us your memories</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm sm:text-base"
                    asChild
                  >
                    <a href="mailto:memories@parackalfamily.com">
                      memories@parackalfamily.com
                    </a>
                  </Button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center pt-4 sm:pt-6 border-t border-zinc-200"
              >
                <p className="font-sans text-sm sm:text-base text-zinc-600 leading-relaxed px-2">
                  "Those we love never truly leave us. They live on in the kindness they showed, 
                  the comfort they shared, and the love they brought into our lives."
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
