import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const PanelPortal = ({ children, isOpen, className }) => {
  if (!isOpen) return null;
  return createPortal(
    <div className={className}>
      {children}
    </div>,
    document.body
  );
};

PanelPortal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default PanelPortal;