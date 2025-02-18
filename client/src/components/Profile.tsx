import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export function Profile() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-2xl p-6 bg-background/80 backdrop-blur">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">John Doe</h1>
              <h2 className="text-xl text-muted-foreground mb-4">Senior Full Stack Developer</h2>
              
              <p className="text-muted-foreground mb-4">
                Passionate about creating scalable web applications and solving complex problems.
                8+ years of experience in full-stack development.
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Button variant="outline" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
                <Button variant="default" className="ml-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
