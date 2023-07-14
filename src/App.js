import './App.scss'
import router from './pages';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
