import Text from "~/components/atoms/Text";

const News: React.FC = () => {
  return (
    <section className="flex flex-col items-center">
      <header>
        <Text variant="title">AKTUELL</Text>
        <Text variant="heading">LIEBE GÄSTE,</Text>
      </header>
      <br />
      <section>
        <Text variant="paragraph">ZUR ZEIT LIEGT NICHTS AKTUELLES VOR.</Text>
        <Text variant="paragraph">WIR HABEN WIE GEWOHNT FÜR SIE GEÖFFNET.</Text>
      </section>
    </section>
  );
};

export default News;
