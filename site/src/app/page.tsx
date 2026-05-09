import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { KeyInfo } from "@/components/key-info";
import { Schedule } from "@/components/schedule";
import { Directions } from "@/components/directions";
import { Accommodation } from "@/components/accommodation";

import { Faq } from "@/components/faq";
import { Rsvp } from "@/components/rsvp";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <KeyInfo />
        <Schedule />
        <Directions />
        <Accommodation />
        <Faq />
        <Rsvp />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
