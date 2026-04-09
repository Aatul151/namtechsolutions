import { useRef, useState } from "react";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import emailjs from '@emailjs/browser';
import { emailjsConfig } from "../../services/apihelper";
import { useComponyDetail } from "../../context/componyContext";

function ContactUs() {
  const { componyProfile } = useComponyDetail();

  const [loader, setLoader] = useState<boolean>(false)
  const form = useRef<any>();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { our_services } = componyProfile

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
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Get In Touch
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Fill out the form below and our team will get back to you shortly.
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mx-auto max-w-lg space-y-4"
        >
          {/* name */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              placeholder="Your name"
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-primary dark:border-zinc-700 dark:bg-zinc-900"
            />
          </div>

          {/* email */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Email
            </label>
            <input
              type="email"
              required
              name="from_email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-primary dark:border-zinc-700 dark:bg-zinc-900"
            />
          </div>

          {/* mobile */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Mobile
            </label>
            <input
              type="number"
              name="from_mobile"
              placeholder="Mobile number"
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-primary dark:border-zinc-700 dark:bg-zinc-900"
            />
          </div>

          {/* service */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Service
            </label>
            <select
              name="service"
              defaultValue=""
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-primary dark:border-zinc-700 dark:bg-zinc-900"
            >
              <option value="" disabled>
                Select a service
              </option>
              {our_services?.services?.map((service:any, idx:any) => (
                <option key={idx} value={service.Title}>
                  {service.Title}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
          </div>

          {/* message */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Message
            </label>
            <textarea
              name="message"
              rows={3}
              placeholder="Write your message..."
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-primary dark:border-zinc-700 dark:bg-zinc-900"
            />
          </div>

          {/* button */}
          <button
            disabled={loader}
            type="submit"
            className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            {loader ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* success modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-xs rounded-2xl bg-white p-5 text-center shadow-xl dark:bg-zinc-900">
              <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
                Success ✅
              </h2>
              <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                Thank you for reaching out. We will contact you shortly through the email address or mobile number you have provided.
              </p>
              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  if (form.current) form.current.reset();
                }}
                className="rounded-lg bg-primary px-4 py-2 text-sm text-white transition hover:opacity-90"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}

export default ContactUs;
