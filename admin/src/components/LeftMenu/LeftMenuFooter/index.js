import React from 'react';

import Wrapper from './Wrapper';

function LeftMenuFooter() {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef
  const projectType = PROJECT_TYPE;

  return (
    <Wrapper>
      <div className="poweredBy">
        <a key="website" href="https://github.com/ikesz" target="_blank" rel="noopener noreferrer">
          <strong>Powered by</strong> Ike
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
