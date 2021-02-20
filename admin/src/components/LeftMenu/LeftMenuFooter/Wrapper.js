import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    background: ${theme.main.colors.strapi['blue-darker']};
    bottom: 0;


    strong {
      color: #ff9000;
    }

    .poweredBy {
      width: 100%;
      bottom: 0;
      height: 3rem;
      padding-left: 15px;
      padding-right: 15px;
      line-height: 3rem;
      background-color: rgba(255, 255, 255, 0.02);
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: 0.05rem;
      vertical-align: middle;

      a {
        color: #eee;
        text-decoration: none;
      }
    }
  `}
`;

export default Wrapper;
