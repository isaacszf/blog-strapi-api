import styled, { css } from 'styled-components';

import Logo from '../../../assets/images/doge-dogecoin.jpg';

const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: #010101;
    height: ${theme.main.sizes.leftMenu.height};

    .leftMenuHeaderLink {
      &:hover {
        text-decoration: none;
      }
    }

    .projectName {
      display: block;
      width: 100%;
      height: ${theme.main.sizes.leftMenu.height};
      font-size: 2rem;
      letter-spacing: 0.2rem;
      color: $white;

      background-image: url(${Logo});
      background-position: center;
      background-size: auto 8rem;
    }
  `}
`;

export default Wrapper;
