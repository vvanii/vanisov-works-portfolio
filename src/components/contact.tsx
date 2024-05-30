import type { FC } from "react";

import { ContactForm } from "@/components";
import { SectionTitle } from "@/components/ui";

const Contact: FC = () => (
  <div className="mb-7 mt-14 text-center">
    <SectionTitle className="mb-5">Get in touch.</SectionTitle>
    <div className="space-y-5 pt-5">
      <p className="text-[16px] text-secondary xl:text-lg">
        Please fill out the form below, I'd love to connect with you!
      </p>
      <ContactForm />
    </div>
  </div>
);

export { Contact };
