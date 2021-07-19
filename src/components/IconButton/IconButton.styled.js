import styled from '@emotion/styled/macro';

export const IconBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 30px;
  width: fit-content;
  cursor: pointer;
  margin: 0;
  padding: 10px;
  border: none;
  border-radius: 50%;
  background-color: grey;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #fff;
  }

  & > svg {
    width: 30px;
    height: 30px;
  }
`;
