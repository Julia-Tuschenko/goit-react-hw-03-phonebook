import styled from "@emotion/styled";

export const Forma = styled.form`
  padding: 15px;
`;

export const LabelPhone = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 18px;
`;

export const InputPhone = styled.input`
  padding: 2px 5px;
  margin-top: 6px;
  width: 200px;
`;

export const AddContact = styled.button`
  padding: 2px 10px;
  margin-top: 20px;
  border-radius: 4px;
  cursor: pointer;
  background: #f5f5fa;
  box-shadow: -10px -10px 20px #ffffff, 10px 10px 20px rgba(72, 121, 150, 0.1),
    5px 5px 10px rgba(72, 121, 150, 0.25), -5px -5px 10px #ffffff;
  border-radius: 30.5px;
  border: transparent;
  &:hover {
    background: lime;
  }
`;
