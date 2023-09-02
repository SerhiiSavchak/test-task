import { LeadGeneration } from 'components/LeadGeneration/LeadGeneration';
import { Header } from 'components/Header/Header';
import { ChakraProvider } from '@chakra-ui/react';

export const App = () => {
  return (
    <>
      <ChakraProvider>
        <Header />
        <LeadGeneration />
      </ChakraProvider>
    </>
  );
};
