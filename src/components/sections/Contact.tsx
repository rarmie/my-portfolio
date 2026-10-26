'use client';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Reveal from '@/components/ui/Reveal';

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

function Spinner() {
  return (
    <svg
      className="animate-spin h-5 w-5 text-black inline-block mr-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>('idle');

  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!EMAIL_PATTERN.test(form.email.trim())) newErrors.email = 'Enter a valid email.';
    if (form.message.length < 10) newErrors.message = 'Message must be at least 10 characters.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setStatus('loading');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  const isLoading = status === 'loading';

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section id="contact" className="py-20 border-t border-neutral-900">
      <div className="max-w-xl mx-auto px-6">
        <Reveal>
        <h2 className="text-4xl font-bold mb-12 text-white text-center">
          Contact Me
        </h2>

        {/* Success message */}
        {status === 'success' && (
          <div className="mb-6 bg-green-950 border border-green-800 rounded-xl p-4 text-center">
            <p className="text-green-400 font-semibold">✅ Message sent!</p>
            <p className="text-neutral-400 text-sm mt-1">
              Thanks, I&apos;ll get back to you soon.
            </p>
          </div>
        )}

        {/* Error message */}
        {status === 'error' && (
          <div className="mb-6 bg-red-950 border border-red-800 rounded-xl p-4 text-center">
            <p className="text-red-400 font-semibold">❌ Something went wrong.</p>
            <p className="text-neutral-400 text-sm mt-1">
              Please try again or email me directly.
            </p>
          </div>
        )}

        {/* Form with loading overlay */}
        <div className="relative flex flex-col gap-5">

          {/* Loading overlay — sits on top of the form while sending */}
          {isLoading && (
            <div className="absolute inset-0 bg-black/70 rounded-xl z-10 flex flex-col items-center justify-center gap-3">
              <svg
                className="animate-spin h-10 w-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              <p className="text-white font-semibold text-sm">
                Sending your message...
              </p>
            </div>
          )}

          {/* Name */}
          <div>
            <label htmlFor="contact-name" className="block text-neutral-300 font-medium mb-1">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              disabled={isLoading}
              className="w-full border border-neutral-700 rounded-lg px-4 py-2 bg-neutral-900 text-white focus:outline-none focus:ring-2 focus:ring-white/40 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="contact-email" className="block text-neutral-300 font-medium mb-1">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              disabled={isLoading}
              className="w-full border border-neutral-700 rounded-lg px-4 py-2 bg-neutral-900 text-white focus:outline-none focus:ring-2 focus:ring-white/40 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="you@email.com"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="contact-message" className="block text-neutral-300 font-medium mb-1">
              Message
            </label>
            <textarea
              id="contact-message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              disabled={isLoading}
              className="w-full border border-neutral-700 rounded-lg px-4 py-2 bg-neutral-900 text-white focus:outline-none focus:ring-2 focus:ring-white/40 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Your message..."
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-white hover:bg-neutral-200 disabled:bg-neutral-600 disabled:cursor-not-allowed text-black font-semibold px-6 py-3 rounded-lg transition-all duration-200 flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <Spinner />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
        </Reveal>
      </div>
    </section>
  );
}