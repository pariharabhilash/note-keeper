import styled from "styled-components";

export const Modal = styled.div`
  z-index: auto;
  display: ${({ show }: { show: boolean }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;
export const Container = styled.div`
  position: fixed;
  background: ${(props: { bgColor: string }) => props.bgColor};
  width: auto;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 0.75rem;
  color: rgba(60, 58, 58, 1);
  min-width: 50%;
`;
