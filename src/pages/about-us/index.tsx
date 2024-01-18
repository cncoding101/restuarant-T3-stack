import Text from "~/components/atoms/text";

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Text variant="title">aktuell</Text>
      <Text variant="paragraph">
        LIEBE GÄSTE, ZUR ZEIT LIEGT NICHTS AKTUELLES VOR. WIR HABEN WIE GEWOHNT
        FÜR SIE GEÖFFNET.
      </Text>
    </div>
  );
};

export default AboutUs;
