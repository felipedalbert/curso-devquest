import Button from './components/button/button';
import Card from './components/card/card';
import './App.css';

function App() {
  return (
    <>
      <Button/>
      <Button/>
      <Button/>
    </>
  );
}

function App2() {
  return (
    <>
      <Card title='Título card 1'/>
      <Card title='Título card 2'/>
      <Card title='Título card 3'/>
    </>
  );
}

export default {App, App2};
 