interface IProps {
  label: string;
  fileName: string;
  extension: "pdf";
}

const Download: React.FC<IProps> = ({ label, fileName, extension }) => {
  return <a href={`${fileName}.${extension}`} download={`${fileName}.${extension}`}>{label}</a>;
};

export default Download;
