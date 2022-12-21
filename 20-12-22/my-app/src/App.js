import './App.css';
import { Button } from './Button';
import { Text } from './text';
export function App() {

  const customColor = 'red';

  return (
    <div className="App">
      <Button />
      <Text as='h1'
            style={{ color: customColor }} 
            variant='title'>Hello world!</Text>
      <Button aria-label="Do not touch!" 
              variant='secondary'
              className='no-border'
              onClick={() => console.log('Ti avevo detto di non premere >:(')}
              >Non premere!</Button>
      <Button variant='primary' 
              aria-label="Useless button"
              >Button with children</Button>
    </div>
  );
}
