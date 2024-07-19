import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home.page";
import RQSuperHeroesPage from "./routes/RQ-Supes.page";
import SuperHeroesPage from "./routes/Supes.page";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import RQPaginatedSupes from "./routes/RQ-PaginatedSupes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <nav className="bg-gray-800 p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex space-x-4">
              <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <Link to="/">Home</Link>
              </div>
              <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <Link to="/rq-supes">RQ Supes</Link>
              </div>
              <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <Link to="/supes">Supes</Link>
              </div>
              <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <Link to="/rq-paginated-supes">RQ Paginated Supes</Link>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/supes">
            <SuperHeroesPage />
          </Route>
          <Route path="/rq-supes">
            <RQSuperHeroesPage />
          </Route>
          <Route path="/rq-paginated-supes">
            <RQPaginatedSupes />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
