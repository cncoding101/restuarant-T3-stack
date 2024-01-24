import Text from "~/components/atoms/text";

const News: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Text variant="title">AKTUELL</Text>
      <Text variant="heading">LIEBE GÄSTE,</Text>
      <Text variant="paragraph">ZUR ZEIT LIEGT NICHTS AKTUELLES VOR.</Text>
      <Text variant="paragraph">WIR HABEN WIE GEWOHNT FÜR SIE GEÖFFNET.</Text>
    </div>
  );
};

export default News;
