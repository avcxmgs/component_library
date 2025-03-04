import './App.css'

import Button from './components/Button/Button';
import Label from './components/Label/Label';


function App() {

  return (
    <>
      <Button disabled={true}>Button!</Button>
      <Label disabled={false}>Text here</Label>
    </>
  )
}

export default App
