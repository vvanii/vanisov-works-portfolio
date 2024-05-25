import type { FC } from "react";

import { ContactForm } from "./contact-form";
import { SectionTitle } from "./section-title";

const Contact: FC = () => {
  return (
    <div className="text-center mt-14 mb-7">
      <SectionTitle className="mb-5">Get in touch.</SectionTitle>
      <div className="pt-5 space-y-5">
        <p className="text-secondary text-[16px] xl:text-lg">
          Please fill out the form below, I'd love to connect with you!
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export { Contact };

