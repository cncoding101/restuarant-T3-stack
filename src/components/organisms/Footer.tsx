import Icon from "~/components/atoms/Icon";

interface IProps {
  icons: React.ComponentProps<typeof Icon>[];
}

const Footer: React.FC<IProps> = ({ icons }) => {
  return (
    <>
      {/* icons */}
      <div className="flex">
        {icons.map((icon, index) => (
          <Icon name={icon.name} key={index}/>
        ))}
      </div>
    </>
  );
};

export default Footer;
