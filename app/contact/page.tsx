'use client'
import { Socials } from "@/components/socials";
import { SendEmailIcon, SentEmailIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input, Textarea } from "@nextui-org/input";
import { useState } from "react";
import { subtitle, title } from "@/components/primitives";
import axios from "axios";

export default function ContactPage() {


  return (
    <div className="flex flex-col lg:flex-row w-full gap-4">
      <section className="flex-1 flex flex-col gap-4">
        
        <h1 className={title()}>Contact Me</h1>
        
        <p className={subtitle()}>Feel free to reach out for any questions, project opportunities, or collaborations.
          As an engineer, I'm always open to connecting and creating innovative solutions.
          Contact me through the social media links below or send me an email.</p>
          
        <div className="flex-1" />
        <Socials classNameLayout="hidden lg:flex w-full gap-8" classNameIcon="size-8 text-default-900" />
      </section>
      <section className="flex-1 w-full">
      <ContactForm className=""/>
      </section>
    </div>
  );
}

const ContactForm = ({className}:{className:string}) => {
  const [status, setStatus] = useState({
    sent: false,
    sending: false,
  })

  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleParam = (e: any) => {
    const { name, value } = e.target;
    setQuery(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ sent: false, sending: true })
    axios({
      method: 'POST',
      url: 'https://formspree.io/xkndaqjb',
      data: query,
    })
      .then((response) => {
        setStatus({ sent: true, sending: false })
      })
      .catch((error) => {
        setStatus({ sent: true, sending: true })
      });
  }

  return (
    <Card className={className}>
      <CardBody>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-4"
          >
          <Input
            type="text"
            name="name"
            label="Name"
            value={query.name}
            onChange={handleParam}
            isRequired />
          <Input
            type="email"
            name="email"
            label="Email"
            value={query.email}
            onChange={handleParam}
            isRequired />
          <Textarea
            label="Message"
            name="message"
            disableAnimation
            disableAutosize
            classNames={{
              input: "h-32",
            }}
            className="w-full"
            value={query.message}
            onChange={handleParam}
            isRequired
          />
          <Button color="default" endContent={status.sent ? <SentEmailIcon /> : <SendEmailIcon />} className="text-lg" type="submit">
            {(status.sent && status.sending) ? 'An unexpected error occurred' : status.sent ? 'Sent' : status.sending ? 'Sending' : 'Send'}
          </Button>
        </form>
      </CardBody>
    </Card>
  )
}
