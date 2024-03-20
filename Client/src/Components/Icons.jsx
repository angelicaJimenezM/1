import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
export const Icons = ({ css, icon }) => {
  return <FontAwesomeIcon className={css} icon={icon} />;
};

Icons.propTypes = {
  css: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};