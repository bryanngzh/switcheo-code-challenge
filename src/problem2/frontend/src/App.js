import './App.css';
import { Heading, Stack } from '@chakra-ui/react'
import Forms from './components/Forms.js';

function App() {
  return (
    <div className="App">
      <>
        <Stack>
          <Heading>
            Transfer $SWTH Tokens
          </Heading>
          <Forms />
        </Stack>
      </>
    </div>
  );
}

export default App;
