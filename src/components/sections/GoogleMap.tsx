import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { useComponyDetail } from '../../context/componyContext';


function GoogleMap() {
    const { componyProfile } = useComponyDetail();
    const { profile } = componyProfile

    return (
        <Section py="xs" className="relative overflow-hidden">
            <Container>
                {profile?.google_map_url && (
                    <div className="relative">
                        {/* soft section heading */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                                Our Location
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                Visit us at our office location.
                            </p>
                        </div>

                        {/* map section */}
                        <section className="relative h-96 overflow-hidden rounded-[32px] md:h-[560px]">
                            {/* soft glow background */}
                            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

                            <iframe
                                src={profile.google_map_url}
                                title={`${profile?.name} google map`}
                                className="relative z-10 h-full w-full"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </section>
                    </div>
                )}
            </Container>
        </Section>
    )
}

export default GoogleMap;