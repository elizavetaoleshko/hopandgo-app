// src/components/Button.jsx
import PropTypes from 'prop-types';

function Button({ children, onClick, className = '', primary = false, type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
        primary
          ? 'bg-sky-500 hover:bg-sky-600 text-white'
          : 'bg-sky-500 hover:bg-sky-600 text-white'
      } ${className}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  primary: PropTypes.bool,
  type: PropTypes.string
};

export default Button;