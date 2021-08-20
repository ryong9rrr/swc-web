import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

function HelmetTitle({ title }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Shall We Code | {title}</title>
    </Helmet>
  );
}

HelmetTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HelmetTitle;
