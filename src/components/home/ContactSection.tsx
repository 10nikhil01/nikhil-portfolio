"use client";
import type { Contact } from "@/components/home/constant";
import {
  ChipHeading,
  ContactHeading,
  ContactLeftPara,
  contacts,
  ContactSubHeading,
} from "@/components/home/constant";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ContactSection() {
  const router = useRouter();
  return (
    <section
      id="contact"
      className="mx-auto flex max-w-[1336px] cursor-default flex-col items-center justify-between px-4 text-white md:px-0 md:py-8 xl:py-16"
    >
      <motion.h2
        initial={{ y: 40, opacity: 0, scale: 0.8 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.5, delay: 0.1, damping: 10 }}
        viewport={{ once: false }}
        className="mb-4 mt-12 w-fit rounded-full bg-gradient-to-r from-purple-500 to-violet-600 px-2 py-1 text-xs font-semibold text-white"
      >
        {ChipHeading}
      </motion.h2>
      <motion.h1
        initial={{ y: 40, opacity: 0, scale: 0.8 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.5, delay: 0.1, damping: 10 }}
        viewport={{ once: false }}
        className="mb-8 text-center text-4xl font-bold text-foreground md:mb-16"
      >
        {ContactHeading}
      </motion.h1>

      <div className="flex w-full items-start justify-between gap-10 max-xl:max-w-3xl max-xl:flex-col max-xl:items-center max-xl:gap-4">
        {/* Left - Info Cards */}
        <div className="space-y-6 xl:w-3/5">
          <motion.h3
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="text-2xl font-bold text-foreground max-lg:mt-6 max-lg:text-center"
          >
            {ContactSubHeading}
          </motion.h3>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="mb-6 text-muted-foreground max-lg:text-center"
          >
            {ContactLeftPara}
          </motion.p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {contacts.map((contact: Contact) => (
              <motion.div
                key={contact.heading}
                onClick={() => router.push(contact.link)}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 10 }}
                viewport={{ once: false }}
                className="min-w-fit rounded-xl bg-border p-[1px] transition-colors duration-500 hover:bg-primaryGradient"
              >
                <Card className="border-0">
                  <CardContent className="flex items-center gap-4 px-5 py-4">
                    <div className="rounded-lg bg-gradient-to-r from-purple-500 to-violet-600 p-2 text-white">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{contact.heading}</h4>
                      <p className="text-sm text-muted-foreground">{contact.subheading}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right - Contact Form */}
        <Card className="w-full bg-muted/10 max-xl:mt-8 xl:w-1/2">
          <CardContent className="space-y-6 p-6">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              <label className="mb-1 block text-sm font-medium">Your Name</label>
              <Input placeholder="John Doe" />
            </motion.div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              <label className="mb-1 block text-sm font-medium">Email Address</label>
              <Input placeholder="john@example.com" />
            </motion.div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              <label className="mb-1 block text-sm font-medium">Message</label>
              <Textarea placeholder="Tell me about your project..." rows={5} />
            </motion.div>
            <motion.button
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className="h-9 w-full rounded-lg bg-gradient-to-r from-purple-500 to-violet-600 px-4 py-2 text-white"
            >
              Send Message
            </motion.button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
