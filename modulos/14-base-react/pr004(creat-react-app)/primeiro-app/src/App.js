import Button from './components/button/button';
import Card from './components/card/card';
import Cards from './components/cards/cards'
import './App.css';

function App() {
  return (
    <>
      <Button label="baixar CV"/>
      <Button/>
    </>
  );
}

function App2() {
  return (
    <>
      {/* <Card> 
        <h3>Título card 1</h3>
        <p>texto do card 1</p>
      </Card>
      
      <Card> 
        <h3>Título card 2</h3>
        <p>texto do card 2</p>
      </Card>

      <Card> 
        <h3>Título card 3</h3>
        <p>texto do card 3</p>
      </Card> */}

      <Cards/>
    </>
  );
}

export default {App, App2};
 