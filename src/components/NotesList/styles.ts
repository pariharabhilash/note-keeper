import styled from "styled-components";

export const Wrapper = styled.div`
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: 70px;
    margin-right: 50px;
    margin-top: 20px;
    width: auto;
    height: auto;
  }
  .my-masonry-grid_column {
    padding-left: 20px;
  }
`;

export const NoteListTitle = styled.h4`
  margin-left: 110px;
  margin-top: 100px;
  text-transform: uppercase;
  color: rgba(96, 98, 98, 0.91);
  font-size: 12px;
  font-weight: bold;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  column-gap: 1rem;
  margin: 4rem 0;
`;

export const StyledButton = styled.button`
  color: rgba(96, 98, 98, 0.91);
  border: none;
  padding: 5px 10px;
  background-color: transparent;
  font-weight: bold;
  font-size: 16px;
  cursor: ${(props: { disabled: boolean }) =>
    props.disabled ? "initial" : "pointer"};
  border-radius: 3px;
  &:hover {
    background-color: ${(props: { disabled: boolean }) =>
      props.disabled ? "transparent" : "rgb(211 204 204 / 20%)"};
    box-shadow: ${(props: { disabled: boolean }) =>
      props.disabled
        ? "none"
        : `0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15)`};
  }
`;
