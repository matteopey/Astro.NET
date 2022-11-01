import { useState } from "react";
import PropTypes from 'prop-types';

const ApiComponent = ({link}) => {
  // const [link, setLink] = useState(null);
  // getLink().then(x => setLink(x));

  return (
    <div>
      <a href={link}>This link is taken server side with a fetch to an API</a>
    </div>
  )
}

// const getLink = async () => {
//   const resp = await fetch("http://localhost:5000/api/values");
//   const link = await resp.text();
//   return link;
// }

ApiComponent.propTypes = {
  link: PropTypes.string
}

export default ApiComponent;