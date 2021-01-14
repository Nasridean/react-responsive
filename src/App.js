import './styles/styles.scss';
import Stripe from './components/Stripe';
import Menu from './components/Menu';
import Motto from './components/Motto';
import Why from './components/Why';
import Services from './components/Services';
import Quality from './components/Quality';

const App = () => (
    <div className="App">
      <Stripe />
      <Menu />
      <Motto />
      <Why />
      <Services />
      <Quality />
    </div>
  );

export default App;
