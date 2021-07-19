import { IconBtn } from './IconButton.styled';

const IconButton = ({ onClick, children }) => {
  return (
    <IconBtn type="button" onClick={onClick}>
      {children}
    </IconBtn>
  );
};

export default IconButton;
