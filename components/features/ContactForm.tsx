"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactFormSection() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [topic, setTopic] = useState("general");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <Input
          placeholder="First name"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          autoComplete="given-name"
        />
        <Input
          placeholder="Last name"
          value={last}
          onChange={(e) => setLast(e.target.value)}
          autoComplete="family-name"
        />
      </div>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
      />
      <Input
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <Textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex items-center gap-2">
        <label htmlFor="topic" className="sr-only">
          Topic
        </label>
        <select
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
        >
          <option value="general">General</option>
          <option value="project">Project inquiry</option>
          <option value="speaking">Speaking</option>
        </select>
      </div>
      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Send message
      </Button>
      {submitted ? (
        <div
          className="rounded-xl border border-border bg-card p-4 text-sm text-foreground"
          role="status"
        >
          <p className="font-medium">Thanks — your message is recorded locally.</p>
          <p className="mt-2 text-muted">
            This demo does not send email; hook up an API route or provider to
            deliver mail.
          </p>
        </div>
      ) : null}
    </form>
  );
}
