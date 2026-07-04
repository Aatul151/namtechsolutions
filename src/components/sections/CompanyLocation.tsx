import { useComponyDetail } from '../../context/componyContext';

export function CompanyLocation() {
  const { componyProfile } = useComponyDetail();
  const { profile } = componyProfile;

  return (
    <>
      {(profile?.address || profile?.email || profile?.mobile_number) &&

        <div className="grid gap-6 border-y border-zinc-200 py-6 dark:border-white/10 lg:grid-cols-3">
          {/* Address */}
          {profile?.address && (
            <div className="flex items-start gap-3 lg:border-r lg:border-zinc-200 lg:pr-6 dark:lg:border-white/10">
              {/* Map Pin Icon Container */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400">
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 2.523-2.047C16.89 18.28 19.25 15.39 19.25 12c0-4.004-3.246-7.25-7.25-7.25S4.75 7.996 4.75 12c0 3.39 2.36 6.28 4.328 8.304a16.976 16.976 0 0 0 2.463 2.047ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Address
                </p>
                <p className="text-sm leading-6">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-white"
                  >
                    {profile.address}
                  </a>
                </p>
              </div>
            </div>
          )}

          {/* Email */}
          {profile?.email && (
            <div className="flex items-start gap-3 lg:border-r lg:border-zinc-200 lg:px-6 dark:lg:border-white/10">
              {/* Envelope Icon Container */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <svg
                  className="h-5 w-5 fill-none stroke-current"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Email
                </p>
                <p className="break-all text-sm leading-6">
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                  >
                    {profile.email}
                  </a>
                </p>
              </div>
            </div>
          )}

          {/* Phone */}
          {profile?.mobile_number && (
            <div className="flex items-start gap-3 lg:pl-6">
              {/* WhatsApp Visual Icon Container */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>

              {/* Content Container */}
              <div className="min-w-0">
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                  WhatsApp
                </p>
                <p className="text-sm leading-6">
                  <a
                    href={`https://wa.me/${profile?.mobile_number}?text=${encodeURIComponent(`${profile?.whatsApp_message}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-emerald-600 hover:underline dark:text-emerald-400"
                  >
                    {profile?.mobile_number}
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      }
    </>
  );
}