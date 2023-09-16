import PropTypes from "prop-types";

const SectionHeading = ({ title = "section heading" }) => {
  return (
    <div className="text-secondary2 font-semibold flex gap-4 h-8 items-center">
      <span className="w-3 h-full bg-secondary2 rounded"></span>
      <span>{title}</span>
    </div>
  );
};

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHeading;
