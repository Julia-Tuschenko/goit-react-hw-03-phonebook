import styled from "@emotion/styled";

export const ListContact = styled.ul`
  margin-left: 10px;
  margin-top: 10px;
  padding-right: 10px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
`;

export const ListButton = styled.button`
  padding: 2px 10px;
  border-radius: 5px;
  cursor: pointer;
  background: #f5f5fa;
  box-shadow: -10px -10px 20px #ffffff, 10px 10px 20px rgba(72, 121, 150, 0.1),
    5px 5px 10px rgba(72, 121, 150, 0.25), -5px -5px 10px #ffffff;
  border-radius: 30.5px;
  border: transparent;
  &:hover {
    background: red;
  }
`;
