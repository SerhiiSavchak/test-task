import styled from 'styled-components';

const Section = styled.section`
  padding-top: ${props => props.paddingmobile};

  @media screen and (min-width: 762px) {
    padding-top: ${props => props.paddingtablet};
  }
  @media screen and (min-width: 1200px) {
    padding-top: ${props => props.paddingdesc};
  }
`;

export const LeadSection = ({
  children,
  paddingmobile,
  paddingtablet,
  paddingdesc,
}) => {
  return (
    <Section
      paddingmobile={paddingmobile}
      paddingtablet={paddingtablet}
      paddingdesc={paddingdesc}
    >
      {children}
    </Section>
  );
};

const Container = styled.div`
  padding-top: ${props => props.paddingmobile};
  width: 342px;
  margin: 0 auto;

  @media screen and (min-width: 762px) {
    padding-top: ${props => props.paddingtablet};
    width: 762px;
  }
  @media screen and (min-width: 1200px) {
    padding-top: ${props => props.paddingdesc};
    width: 1200px;
  }
`;

export const LeadContainer = ({
  children,
  paddingmobile,
  paddingtablet,
  paddingdesc,
}) => {
  return (
    <Container
      paddingmobile={paddingmobile}
      paddingtablet={paddingtablet}
      paddingdesc={paddingdesc}
    >
      {children}
    </Container>
  );
};
