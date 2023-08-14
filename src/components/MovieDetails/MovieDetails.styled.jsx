import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const MovieWrapper = styled.div`
  display: flex;
`;

export const MovieWrapperDesq = styled.div`
  margin-left: 30px;
`;

export const GenresTitle = styled.p`
  font-weight: bold;
`;

export const GenresList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const GenresListItem = styled.li`
  margin-right: 30px;
`;

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const Button = styled.button`
  background: #bf4f74;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  cursor: pointer;
`;
