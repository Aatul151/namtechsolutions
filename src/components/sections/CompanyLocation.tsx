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
            <div className="flex items-start gap-3 lg:pr-6 lg:border-r lg:border-zinc-200 dark:lg:border-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                📍
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Address
                </p>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {profile.address}
                </p>
              </div>
            </div>
          )}

          {/* Email */}
          {profile?.email && (
            <div className="flex items-start gap-3 lg:px-6 lg:border-r lg:border-zinc-200 dark:lg:border-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                ✉️
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Email
                </p>
                <p className="break-all text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {profile.email}
                </p>
              </div>
            </div>
          )}

          {/* Phone */}
          {profile?.mobile_number && (
            <div className="flex items-start gap-3 lg:pl-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                📞
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Phone
                </p>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {profile.mobile_number}
                </p>
              </div>
            </div>
          )}
        </div>
      }
    </>
  );
}