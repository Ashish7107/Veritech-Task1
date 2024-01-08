import "./ribbon.css";
interface Props {
  subHeading: string;
}

const RibbonRight = ({ subHeading }: Props) => {
  return (
    <div className="container flex items-center justify-center sm:justify-end space-x-4">
      {/* Heading in the middle */}
      <div className="heading text-white bg-purple-700 w-fit text-center p-2 rounded-md text-base md:text-xl font-medium">
        {subHeading}
      </div>

      {/* Ribbon at the right end */}
      <div className="ribbon relative bg-purple-700 w-24 md:w-52 h-12 text-white p-4">
        <div className="ribbon-wrapper-right bg-white"></div>
      </div>
    </div>
  );
};

export default RibbonRight;
