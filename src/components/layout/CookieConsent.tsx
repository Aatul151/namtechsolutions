import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export const COOKIE_CONSENT_KEY = 'namtech-cookie-consent';
export const COOKIE_CONSENT_EVENT = 'namtech-cookie-reset';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sync = () => {
      setVisible(!localStorage.getItem(COOKIE_CONSENT_KEY));
    };
    sync();
    window.addEventListener(COOKIE_CONSENT_EVENT, sync);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, sync);
  }, []);

  const choose = (value: 'accepted' | 'declined') => {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[200] p-4 sm:p-6">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-border bg-bg-card p-4 shadow-strong sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <p className="text-sm leading-relaxed text-text-secondary">
          We use cookies to remember your preferences and improve this site.{' '}
          <Link to="/privacy-policy" className="font-semibold text-primary hover:underline">
            Privacy Policy
          </Link>
        </p>
        <div className="flex flex-shrink-0 items-center gap-2">
          <Button variant="outline" size="sm" className="normal-case tracking-normal" onClick={() => choose('declined')}>
            Decline
          </Button>
          <Button variant="primary" size="sm" className="normal-case tracking-normal" onClick={() => choose('accepted')}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}

export function resetCookieConsent() {
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}
