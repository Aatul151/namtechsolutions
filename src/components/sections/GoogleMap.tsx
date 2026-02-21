import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { useComponyDetail } from '../../context/componyContext';

function GoogleMap() {
    const { componyProfile } = useComponyDetail();
    return (
        <Section py='xs'>
            <Container>
                {componyProfile?.google_map_url &&
                    <section className="w-full h-96 md:h-[560px] mb-10">
                        <iframe
                            src={componyProfile?.google_map_url}
                            title={`${componyProfile?.name} google map`}
                            className="w-full h-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                }
            </Container>
        </Section >
    )
}

export default GoogleMap;