import { LoadMoreBtn } from './Button.styled';

export default function Button({ onClick }) {
  return (
    <LoadMoreBtn onClick={onClick} type="button">
      Load more
    </LoadMoreBtn>
  );
}
