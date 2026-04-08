import { MarkedText } from '../ui/MarkedText';
import detail from '../../assets/detail.json';

export function CompanyLocation() {
  const { profile } = detail;

  return (
    <>
      {(profile?.address || profile?.email || profile?.mobile_number) &&

        <div className="rounded-2xl border border-border bg-bg-card p-6 md:p-7 shadow-sm 
                        hover:shadow-lg transition-all duration-300">

          {/* Title */}
          <div className="mb-6">
            <MarkedText as="h2" text="Get in [[Touch]]" />
            <p className="text-sm md:text-base text-text-secondary mt-2">
              We're here to help you.
            </p>
          </div>

          {/* Info List */}
          <ul className="space-y-5">

            {/* Address */}
            {profile?.address && (
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                  📍
                </div>

                <div className="text-sm md:text-base">
                  <p className="font-semibold text-text-primary">Address</p>
                  <p className="text-text-secondary">{profile.address}</p>
                </div>
              </li>
            )}

            {/* Email */}
            {profile?.email && (
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  ✉️
                </div>

                <div className="text-sm md:text-base">
                  <p className="font-semibold text-text-primary">Email</p>
                  <p className="text-text-secondary">{profile.email}</p>
                </div>
              </li>
            )}

            {/* Phone */}
            {profile?.mobile_number && (
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                  📞
                </div>

                <div className="text-sm md:text-base">
                  <p className="font-semibold text-text-primary">Phone</p>
                  <p className="text-text-secondary">{profile.mobile_number}</p>
                </div>
              </li>
            )}

          </ul>

        </div>
      }
    </>
  );
}