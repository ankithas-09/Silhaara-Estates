"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

// ─── Replace with your Formspree form ID ──────────────────────────────
// Sign up at https://formspree.io, create a form for ankithasuresh2000@gmail.com
// and paste the ID (e.g. "xpwzabcd") here.
const FORMSPREE_ID = "YOUR_FORM_ID";
// ─────────────────────────────────────────────────────────────────────

type Field = {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
};

const fields: Field[] = [
  { name: "name",   label: "Name",              type: "text",  placeholder: "Your full name" },
  { name: "phone",  label: "Phone Number",       type: "tel",   placeholder: "+91 00000 00000" },
  { name: "email",  label: "Email",              type: "email", placeholder: "you@example.com" },
  { name: "budget", label: "Investment Budget",  type: "text",  placeholder: "e.g. ₹2 Cr – ₹5 Cr" },
];

export default function Contact() {
  const [values, setValues]   = useState<Record<string, string>>({});
  const [status, setStatus]   = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(`https://formspree.io/f/xnjwgwbl`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section
        id="contact"
        className="bg-ivory text-green py-28 md:py-36 px-6"
      >
        <div className="max-w-5xl mx-auto">

          {/* ── One-liner ──────────────────────────────────────────── */}
          <FadeIn>
            <div className="text-center mb-20 md:mb-24">
              <h2
                className="
                  font-serif font-light
                  text-3xl md:text-5xl
                  text-green tracking-wide
                "
              >
                Begin a conversation with SILHAARA
              </h2>
            </div>
          </FadeIn>

          {/* ── Two-column layout ──────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

            {/* Left — contact details */}
            <FadeIn>
              <div>
                <h3 className="font-serif font-light text-2xl md:text-3xl text-green mb-10">
                  Enquire Now
                </h3>

                <div className="space-y-7">
                  {[
                    { label: "Email",    value: "info@silhaaraestates.com",  href: "mailto:info@silhaaraestates.com" },
                    { label: "Phone",    value: "+91 70192 04493",             href: "tel:+917019204493" },
                    { label: "Location", value: "Bangalore, India",            href: undefined },
                  ].map(({ label, value, href }) => (
                    <div key={label}>
                      <p className="text-[10px] tracking-[0.4em] uppercase text-green/35 mb-1">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="font-serif text-base md:text-lg text-green/80 hover:text-green transition-colors duration-300"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-serif text-base md:text-lg text-green/80">
                          {value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right — form */}
            <FadeIn delay={150}>
              {status === "success" ? (
                <div className="flex flex-col justify-center h-full">
                  <div className="w-8 h-px bg-gold mb-8" />
                  <p className="font-serif font-light text-2xl text-green mb-3">
                    Thank you.
                  </p>
                  <p className="text-sm text-green/60 font-light leading-relaxed">
                    Your enquiry has been received. Someone from the SILHAARA
                    team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {fields.map((field) => (
                    <div key={field.name} className="flex flex-col gap-2">
                      <label
                        htmlFor={field.name}
                        className="text-[10px] tracking-[0.4em] uppercase text-green/40"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type ?? "text"}
                        placeholder={field.placeholder}
                        value={values[field.name] ?? ""}
                        onChange={handleChange}
                        required
                        className="
                          bg-transparent
                          border-b border-green/20
                          focus:border-green/60
                          outline-none
                          text-green text-sm md:text-base
                          placeholder:text-green/25
                          py-2.5
                          transition-colors duration-300
                          w-full
                        "
                      />
                    </div>
                  ))}

                  {status === "error" && (
                    <p className="text-[11px] text-red-600/70 tracking-wide">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="
                      mt-2 px-6 py-2.5
                      text-[11px] tracking-[0.25em] uppercase
                      border border-gold text-gold
                      hover:bg-gold hover:text-green
                      disabled:opacity-40 disabled:cursor-not-allowed
                      transition-all duration-400 ease-out
                    "
                  >
                    {status === "loading" ? "Sending…" : "Submit Enquiry"}
                  </button>
                </form>
              )}
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="bg-ivory pb-10 flex flex-col items-center gap-3">
        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="w-full h-px bg-green/8" />
        </div>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="
            font-serif font-light
            text-lg tracking-[0.35em] uppercase
            text-green/35 hover:text-green/65
            transition-colors duration-300 mt-8
          "
        >
          SILHAARA
        </a>
        <p className="text-[10px] tracking-[0.3em] uppercase text-green/20">
          © SILHAARA
        </p>
      </footer>
    </>
  );
}
