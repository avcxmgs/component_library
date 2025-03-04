import './App.css'

import Button from './components/Button/Button';
import Label from './components/Label/Label';
import Text from './components/Text/Text';



function App() {

  return (
    <>
      <Button disabled={false}>Button!</Button><br/>
      <Label disabled={false}>Text here</Label><br/>
      <Text disabled={false}>hi hello</Text><br/>
    </>
  )
}

export default App
