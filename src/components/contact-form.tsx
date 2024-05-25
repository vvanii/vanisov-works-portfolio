import type { FC } from "react";

import { Button } from "./button";
import { Input, Selection, Textarea } from "./input";

const ContactForm: FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="gap-5 max-w-xl mx-auto grid"
    >
      <Input
        type="text"
        placeholder="Full Name*"
        required
      />
      <Input
        type="email"
        placeholder="Email*"
        required
      />
      <Input
        type="text"
        placeholder="Company"
      />
      <Selection required>
        <option
          defaultChecked
          value=""
        >
          Inquery Type*
        </option>
        <option value="consulting">Consulting</option>
        <option value="design/prototyping">Design/Prototyping</option>
        <option value="web-development">Web Development</option>
        <option value="contact">Contact</option>
      </Selection>
      <Textarea
        placeholder="Message*"
        className="col-span-2 min-h-32"
        spellCheck
        required
      />
      <div className="pt-5 flex justify-center col-span-2">
        <Button
          type="submit"
          className="w-40"
        >
          <p className="text-sm">Send Message</p>
        </Button>
      </div>
    </form>
  );
};

export { ContactForm };

