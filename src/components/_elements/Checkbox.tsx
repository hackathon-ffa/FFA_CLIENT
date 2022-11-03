import { ChangeEvent } from "react";
import styled from "styled-components";

type Props = {
  children: string;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
};

const Checkbox = ({ children, id, onChange, checked }: Props) => {
  return (
    <Wrapper>
      <input onChange={onChange} checked={checked} id={id} type="checkbox" />
      <label htmlFor={id}>{children}</label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  & > input {
    width: 24px;
    height: 24px;
    appearance: none;
    background: #fff;
    border: 1px solid #dddddd;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
  }

  & > label {
    padding-left: 5px;
    font-size: 13px;
    cursor: pointer;
  }

  & > input::after {
    content: "";
    display: none;
    position: relative;
    left: 40%;
    top: 20%;
    width: 15%;
    height: 40%;
    border: solid #6cdd83;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  & > input:checked::after {
    display: block;
  }
`;

export default Checkbox;
