import './App.css';
import { Heading, Stack, HStack, Image } from '@chakra-ui/react'
import Forms from './components/Forms.js';
import logo from './images/Cz7BPXlw_400x400.png'

function App() {
  return (
    <div className="App">
      <>
      <HStack spacing={10}>
        <Stack>
          <Heading>
            Transfer $SWTH Tokens
          </Heading>
          <Forms />
        </Stack>
        <Image src={logo}/>
      </HStack>
      </>
    </div>
  );
}

export default App;
