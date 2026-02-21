import { useEffect, useState } from "react";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { FormRenderer } from '@aatulwork/customform-renderer'
import { fetchFormDefination, submitFormEntry } from "../../services/formservices";
import { FORMNAMES } from "../../utilities/codes";
import { customFormServices } from "../../utilities/formutilities";

function ContactUs() {
  const [formDefination, setFormDefination] = useState<any>({});

  useEffect(() => {
    fetchContactUsFormDefination();
  }, [])

  const fetchContactUsFormDefination = async () => {
    try {
      const data = await fetchFormDefination(FORMNAMES.CONTACTUS);
      if (data) setFormDefination(data)
    } catch (error) { }
  }

  const handleSubmit = async (data: any) => {
    try {
      const res: any = await submitFormEntry(FORMNAMES.CONTACTUS, data);
      if (!res?.success) return;
    } catch (error) { }
  }
  return (
    <Section py="xl">
      <Container>
        {formDefination &&
          <FormRenderer
            formSchema={formDefination}
            services={customFormServices}
            onSubmit={handleSubmit}
          />
        }
      </Container>
    </Section>
  );
}

export default ContactUs;
