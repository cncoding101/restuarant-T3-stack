import Icon from "~/components/atoms/Icon";
import Link from "~/components/atoms/Link";

interface IContact {
  phone: string;
  email: string;
  location: string;
}

interface IProps {
  icons: React.ComponentProps<typeof Icon>[];
  contact?: IContact;
}

const Footer: React.FC<IProps> = ({ icons, contact }) => {
  return (
    <>
      {/* icons */}
      <div className="flex">
        {icons.map((icon, index) => (
          <button key={index}>
            <Icon {...icon} className="m-2" />
          </button>
        ))}
      </div>

      {/* <div className="flex items-center">
        <Icon icon="close" type="io" className="m-2" />
        {contact.phone}
      </div>

      <div className="flex items-center">
        <Icon icon="close" type="io" className="m-2" />
        <Link to={`mailto:${contact.email}`} label={contact.email} />
      </div>

      <div className="flex items-center">
        <Icon icon="close" type="io" className="m-2" />
        <Link to={contact.location} label="hello" />
      </div>

      <div className="flex items-center">
        <p className="p-1">hello</p> |{" "}
        <Link
          to={`mailto:anh_nguyen4@hotmail.com}`}
          label="hello"
          className="p-1"
        />
      </div> */}
    </>
  );
};

export default Footer;
