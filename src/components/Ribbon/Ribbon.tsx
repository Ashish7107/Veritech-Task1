import "./ribbon.css";
interface Props {
  subHeading: string;
}
const Ribbon = ({ subHeading }: Props) => {
  return (
    <>
      <div className="container grid grid-cols-3 md:grid-cols-2 ">
        <div className="relative bg-purple-700  w-24 md:w-56 h-12 text-white p-4">
          <div className="ribbon-wrapper bg-white"></div>
        </div>
        <div className="heading text-white  bg-purple-700 w-fit items-center text-center p-2 rounded-md sm:text-xl font-medium">
          {subHeading}
        </div>
      </div>
    </>
  );
};

export default Ribbon;
