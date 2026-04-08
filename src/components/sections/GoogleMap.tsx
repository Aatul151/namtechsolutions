import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import detail from '../../assets/detail.json'


function GoogleMap() {
    const { profile } = detail

    return (
        <Section py='xs'>
            <Container>
                {profile?.google_map_url &&
                    <section className="w-full h-96 md:h-[560px] mb-10">
                        <iframe
                            src={profile?.google_map_url}
                            title={`${profile?.name} google map`}
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