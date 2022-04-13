import './App.css';
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';

function App() {
  return (
    <div className="App">
      <EventsClass />
      <EventsFunctional />
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true}/>
      <NestingComponents />
    </div>
  );
}

export default App;
