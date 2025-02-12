import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-4">Let's Connect</h1>
        <p className="text-gray-400 mb-6">
          If you’d like to work together or just want to say hi, drop me a
          message!
        </p>

        <form className="space-y-4">
          <Input type="text" placeholder="Your Name" className="bg-gray-800" />
          <Input type="email" placeholder="Your Email" className="bg-gray-800" />
          <Textarea placeholder="Your Message" className="bg-gray-800" />
          <Button className="w-full bg-blue-600 hover:bg-blue-500">Send</Button>
        </form>

        <div className="flex justify-center space-x-6 mt-6">
          <a href="mailto:hello@example.com" className="hover:text-blue-400">
            <Mail size={24} />
          </a>
          <a href="https://github.com" className="hover:text-blue-400">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" className="hover:text-blue-400">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
