import { useRef, useState } from "react";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import details from '../../assets/detail.json'
import emailjs from '@emailjs/browser';
import { emailjsConfig } from "../../services/apihelper";

function ContactUs() {
  const [loader, setLoader] = useState<boolean>(false)
  const form = useRef<any>();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { our_services } = details

  const sendEmail = (e: any) => {
    setLoader(true)
    e.preventDefault();
    emailjs.sendForm(emailjsConfig?.SERVICE_ID, emailjsConfig?.TEMPLATE_ID, form.current, {
      publicKey: emailjsConfig?.PUBLIC_KEY,
    })
      .then(
        () => {
          setLoader(false);
          setShowSuccessModal(true);
        },
        (error) => {
          setLoader(false);
          console.log('FAILED...', error);
        },
      );
  };


  return (
    <Section py="xs">
      <Container>

        <form ref={form} onSubmit={sendEmail} className="space-y-5 max-w-xl">
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              placeholder="Your name"
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 outline-none transition focus:border-primary"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Email
            </label>
            <input
              type="email"
              required
              name="from_email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 outline-none transition focus:border-primary"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Mobile
            </label>
            <input
              type="number"
              name="from_mobile"
              placeholder="Mobile number"
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 outline-none transition focus:border-primary"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Service
            </label>
            <select
              name="service"
              defaultValue=""
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 outline-none transition focus:border-primary"
            >
              <option value="" disabled>
                Select a service
              </option>
              {our_services?.services?.map((service: any, idx: number) => (
                <option key={idx} value={service.Title}>
                  {service.Title}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Write your message..."
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 outline-none transition focus:border-primary"
            />
          </div>

          <button
            disabled={loader}
            type="submit"
            className="w-full rounded-xl bg-primary px-5 py-3 font-medium text-white transition hover:opacity-90"
          >
            Send Message
          </button>
        </form>

        {showSuccessModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-xl p-6 max-w-sm w-full text-center shadow-lg relative">
              <h2 className="text-xl font-semibold mb-2 text-text-primary">Success! ✅</h2>
              <p className="text-text-secondary mb-4">Your message has been sent successfully.</p>
              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  if (form.current) form.current.reset();
                }}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition"
              >
                Ok
              </button>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}

export default ContactUs;
