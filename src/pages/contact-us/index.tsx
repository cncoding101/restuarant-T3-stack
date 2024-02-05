import Text from "~/components/atoms/Text";
import Map from "~/components/organisms/map";

const ContactUs: React.FC = () => {
  const map: React.ComponentProps<typeof Map> = {
    location: { lat: 53.541286480993044, lng: 9.990971297137845 },
    markers: [
      {
        icon: "parking",
        position: {
          lat: 53.54173914189407,
          lng: 9.987752646481646,
        },
      },
    ],
  };

  return (
    <section>
      <section className="flex flex-col items-center">
        <header>
          <Text variant="title">ANFAHRT</Text>
        </header>
        <br />
        <section className="flex flex-col items-center">
          <Text variant="paragraph">DAS RESTAURANT BEFINDET SICH AM</Text>
          <Text variant="paragraph">VASCO DA GAMA PLATZ</Text>
          <Text variant="paragraph">AM KAISERKAI 19, 20457 HAMBURG</Text>
        </section>
      </section>
      <br />
      <Map {...map} />
      <br />
      <section className="flex flex-col items-center">
        <header>
          <Text variant="title">PARKHÄUSER</Text>
        </header>
        <br />
        <section className="flex flex-col items-center">
          <Text variant="paragraph">
            ELBPHILHARMONIE (400M) | PLATZ DER DEUTSCHEN EINHEIT 1 | 5€/H
          </Text>
          <Text variant="paragraph">
            SPEICHERSTADT (450M) | AM SANDTORKAI 6 | 2,50€/H
          </Text>
          <Text variant="paragraph">
            ÜBERSEEQUARTIER (450M) | ÜBERSEEALLEE 3 | 2,50€/H
          </Text>
        </section>
      </section>
      <br />
      <section className="flex flex-col items-center">
        <header>
          <Text variant="title">ÖFFENTLICHE VERKEHRSMITTEL</Text>
        </header>
        <br />
        <section className="flex flex-col items-center">
          <Text variant="paragraph">
            MAGELLAN-TERRASSEN [BUSLINIE 111] (300M)
          </Text>
          <Text variant="paragraph">ÜBERSEEQAURTIER [U4] (750M)</Text>
          <Text variant="paragraph">
            BAUMWALL (ELBPHILHARMONIE) [U3] (850M)
          </Text>
        </section>
      </section>
    </section>
  );
};

export default ContactUs;
