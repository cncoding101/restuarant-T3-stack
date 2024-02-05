import Text from "~/components/atoms/Text";
import Icon from "~/components/atoms/Icon";
import Link from "~/components/atoms/Link";

interface IContact {
  phone: string;
  email: string;
  location: React.ComponentProps<typeof Link>;
}

interface IProps {
  icons: React.ComponentProps<typeof Icon>[];
  contact: IContact;
}

const Footer: React.FC<IProps> = ({ icons, contact }) => {
  return (
    <footer className="flex flex-col items-center">
      {/* icons */}
      <section className="flex">
        {icons.map((icon, index) => (
          <button key={index}>
            <Icon {...icon} className="m-3" />
          </button>
        ))}
      </section>

      <section className="flex items-baseline">
        <Icon icon="phone" type="fa" className="m-2" />
        <Text variant="label">{contact.phone}</Text>
      </section>

      <section className="flex items-baseline">
        <Icon icon="location" type="fa6" className="m-2" />
        <Link {...contact.location} className="text-xs" />
      </section>

      <section className="flex items-baseline">
        <Icon icon="email" type="md" className="m-2" />
        <Link
          to={`mailto:${contact.email}`}
          label={contact.email}
          className="text-xs"
        />
      </section>

      <section className="mb-2 flex">
        <Text variant="label" className="p-1 text-xs">
          BOOTSHAUS GRILL & BAR |
          <Link
            to={`mailto:anh_nguyen4@hotmail.com}`}
            label="impressum"
            className="p-1"
          />
        </Text>
      </section>
    </footer>
  );
};

export default Footer;
