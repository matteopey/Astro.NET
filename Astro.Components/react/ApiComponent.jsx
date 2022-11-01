import PropTypes from 'prop-types';
import Coins from './Coins';

const ApiComponent = ({link}) => {
  return (
    <div>
      <a href={link}>This link is taken server side with a fetch to an API</a>
      <Coins />
    </div>
  )
}

ApiComponent.propTypes = {
  link: PropTypes.string
}

export default ApiComponent;