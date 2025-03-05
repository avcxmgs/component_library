import './App.css'

import Button from './components/Button/Button';
import Label from './components/Label/Label';
import Text from './components/Text/Text';
import Table from './components/Table/Table';



function App() {

  return (
    <>
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
    </>
  )
}

export default App
