import { MainLayout } from './components/MainLayout';
import { Header } from './components/Header';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
      </header>
      <main className='app-content'>
        <MainLayout />
      </main>
    </div>
  );
}

export default App;
