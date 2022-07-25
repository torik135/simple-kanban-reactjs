import './App.css';

import { Header } from './components/Header';
import { MainLayout } from './components/MainLayout';

function App() {
  return (
    <div className='App'>
      <header>
        <Header />
      </header>

      <main>
        <MainLayout />
      </main>
    </div>
  );
}

export default App;
