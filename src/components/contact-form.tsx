import { useRef, type FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

import { cn } from "@/utils";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "./button";
import { CheckmarkIcon, LoadingIcon } from "./icons";
import { Input, Selection, Textarea } from "./input";

const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  inquiryType: z.string().min(1),
  message: z.string().min(1),
});

type ContactSchemaType = z.infer<typeof ContactSchema>;

const ContactForm: FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const form = useForm<ContactSchemaType>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      inquiryType: "",
      message: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful, isValid, errors, isLoading },
    register,
  } = form;

  const onSubmit: SubmitHandler<ContactSchemaType> = () => {
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("Email sent!");
        },
        (error) => {
          toast.error("Email failed to send.");
          console.error("Email could not be sent:", error);
        }
      );
  };

  return (
    <form
      ref={(ref) => (formRef.current = ref)}
      onSubmit={handleSubmit(onSubmit)}
      className="gap-5 max-w-xl mx-auto grid"
    >
      <Input
        {...register("name")}
        type="text"
        placeholder="Full Name*"
      />
      <Input
        {...register("email")}
        type="text"
        placeholder="Email*"
      />
      <Input
        {...register("company")}
        type="text"
        placeholder="Company"
      />
      <Selection {...register("inquiryType")}>
        <option
          defaultChecked
          value=""
        >
          Inquiry Type*
        </option>
        <option value="consulting">Consulting</option>
        <option value="design/prototyping">Design/Prototyping</option>
        <option value="web-development">Web Development</option>
        <option value="contact">Contact</option>
      </Selection>
      <Textarea
        {...register("message")}
        placeholder="Message*"
        className="col-span-2 min-h-32 max-h-[500px]"
        spellCheck
      />
      <div className="pt-5 flex justify-center col-span-2">
        <Button
          type="submit"
          className={cn(
            "w-40",
            !isValid
              ? "opacity-30 pointer-events-none duration-300 transition-opacity ease-in-out"
              : "opacity-100 transition-opacity ease-in-out",
            isSubmitSuccessful && !errors && "pointer-events-none"
          )}
        >
          <p className="text-sm">
            {isSubmitting || isLoading ? (
              <span className="flex justify-center items-center">
                <LoadingIcon className="h-5 w-5 animate-spin" /> Sending
              </span>
            ) : isSubmitSuccessful ? (
              <span className="flex justify-center items-center">
                <CheckmarkIcon className="h-5 w-5" /> Sent
              </span>
            ) : (
              "Send Message"
            )}
          </p>
        </Button>
      </div>
    </form>
  );
};

export { ContactForm };

