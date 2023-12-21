import { BrowserRouter } from 'react-router-dom';
import ClerkProviderWithRoutes from './components/Providers/ClerkProviderWithRoutes';

function App() {
  return (
    <div className="max-w-screen-3xl mx-auto px-20 3xl:px-0">
      <BrowserRouter>
        <ClerkProviderWithRoutes />{' '}
      </BrowserRouter>
    </div>
  );
}

export default App;
