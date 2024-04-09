import { Card } from './components';
import { OpeningHours } from './components';
import { openingHours } from './utils/data';

function App() {
  return <Card openingHours={openingHours as OpeningHours} />;
}

export default App;
