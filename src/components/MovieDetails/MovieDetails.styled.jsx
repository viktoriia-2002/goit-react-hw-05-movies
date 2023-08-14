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
  color: orange;
`;
