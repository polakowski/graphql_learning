import PropTypes from 'prop-types';

export const todo = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  completedAt: PropTypes.string,
});
