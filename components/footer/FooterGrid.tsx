"use client";

import { motion } from "framer-motion";

import FooterColumn from "./FooterColumn";
import ContactCard from "./ContactCard";
import SocialLinks from "./SocialLinks";
import { footerData } from "./footer-data";

export default function FooterGrid() {
  const [whoIAm, explore, contact] = footerData.columns;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: 0.2,
      }}
      className="mt-20 grid gap-12 lg:grid-cols-4 md:grid-cols-2"
    >
      {/* Who I Am */}
      <FooterColumn
        title={whoIAm.title}
        links={whoIAm.links}
      />

      {/* Explore */}
      <FooterColumn
        title={explore.title}
        links={explore.links}
      />

      {/* Contact */}
      <ContactCard
        title={contact.title}
        links={contact.links}
      />

      {/* Social */}
      <SocialLinks />
    </motion.div>
  );
}