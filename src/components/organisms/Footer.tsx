import Text from "~/components/atoms/Text";
import Icon from "~/components/atoms/Icon";
import Link from "~/components/atoms/Link";
import ButtonLink from "~/components/molecules/ButtonLink";
import { usePhoneView } from "../hoc/layout";

interface IContact {
  phone: { number: string; size: number };
  email: { address: string; size: number };
  location: { to: string; label: string; size: number };
}

interface IProps {
  links: ({ to: string } & {
    icon: React.ComponentProps<typeof Icon>;
  })[];
  contact: IContact;
}

const Footer: React.FC<IProps> = ({ links, contact }) => {
  const isPhoneView = usePhoneView();

  return (
    <footer className="flex flex-col items-center">
      {/* icons */}
      <section className="flex">
        {links.map((link, index) => (
          <ButtonLink key={index} to={link.to} className="m-3">
            <Icon {...link.icon} />
          </ButtonLink>
        ))}
      </section>
      {isPhoneView ? (
        <>
          <section className="flex">
            <ButtonLink to={`tel:${contact.phone.number}`}>
              <Icon
                icon="phone"
                type="fa"
                className="m-2"
                size={contact.phone.size}
              />
            </ButtonLink>

            <ButtonLink to={contact.location.to}>
              <Icon
                icon="location"
                type="fa6"
                className="m-2"
                size={contact.location.size}
              />
            </ButtonLink>

            <ButtonLink to={`mailto:${contact.email.address}`}>
              <Icon
                icon="email"
                type="md"
                className="m-2"
                size={contact.email.size}
              />
            </ButtonLink>
          </section>

          <section className="mb-2 flex">
            <small>
              <Link to="/impressum" className="p-1">
                <Text variant="label">impressum</Text>
              </Link>
            </small>
          </section>
        </>
      ) : (
        <>
          <section className="flex items-baseline">
            <Icon icon="phone" type="fa" className="m-2" />
            <Text variant="paragraph">{contact.phone.number}</Text>
          </section>
          <section className="flex items-baseline">
            <Icon icon="location" type="fa6" className="m-2" />
            <Link to={contact.location.to}>
              <Text variant="label">{contact.location.label}</Text>
            </Link>
          </section>
          <section className="flex items-baseline">
            <Icon icon="email" type="md" className="m-2" />
            <Link to={`mailto:${contact.email.address}`} className="text-xs">
              <Text variant="label">{contact.email.address}</Text>
            </Link>
          </section>

          <section className="mb-2 flex">
            <small>
              <Text variant="label" className="p-1 text-xs">
                BOOTSHAUS GRILL & BAR |
                <Link to="/impressum" className="p-1">
                  <Text variant="label">impressum</Text>
                </Link>
              </Text>
            </small>
          </section>
        </>
      )}
    </footer>
  );
};

export default Footer;
