import styled, { css } from "styled-components";

// Container라는 컴포넌트를 만들껀데 이는 styled된 컴포넌트이고 div태그를 기본적으로 사용할 것이다. ``에 원하는 스타일을 하면 됩니다.
const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #3c5b69;
  color: #b9eaff;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) =>
    // props가 primary라고 설정되어있으면 css속성을 아래와 같이 지정
    props.primary &&
    css`
      background: #009cd5;
      color: white;
    `};
`;

export default function StyledComponent() {
  return (
    <Container>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </Container>
  );
}
