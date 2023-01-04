import './App.css';
import Customers from './Customers';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider queryClient={queryClient}>
        <Customers />
      </QueryClientProvider>
    </div>
  );
}

export default App;
