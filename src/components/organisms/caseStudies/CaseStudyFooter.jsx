import React from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms';
import { webpBackground } from '../../../util/style';

const Wrapper = styled.div`
  align-items: center;
  background: no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  min-height: 45vw;
  overflow-x: hidden;
  width: 100%;

  ${webpBackground('/img/backgrounds/moon.jpg', '/img/backgrounds/moon.webp')};
`;

function CaseStudyFooter() {
  return (
    <Wrapper>
      <Button>Get Started</Button>
    </Wrapper>
  );
}

CaseStudyFooter.defaultProps = {};

CaseStudyFooter.propTypes = {};

export default CaseStudyFooter;