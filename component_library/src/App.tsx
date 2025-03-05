import './App.css'

import Button from './components/Button/Button';
import Label from './components/Label/Label';
import Text from './components/Text/Text';
import Table from './components/Table/Table';
import Img from './components/Img/Img';
import HeroImage from './components/Hero_Image/HeroImage';



function App() {

  return (
    <>
      <HeroImage src="https://placehold.co/1200x300" alt="placeholder image" text="HERO IMAGE" disabled={false}/>
      <Button disabled={false}>Button!</Button><br/>
      <Label disabled={false}>Text here</Label><br/>
      <Text disabled={false}>hi hello</Text><br/>
      <Table disabled={false}>
        <tr>
          <th>TH1</th>
          <th>TH2</th>
        </tr>
        <tr>
          <td>TD1</td>
          <td>TD2</td>
        </tr></Table><br/>
      <Img src="https://placehold.co/300" alt="placeholder image" disabled={false}/><br/>
    </>
  )
}

export default App
