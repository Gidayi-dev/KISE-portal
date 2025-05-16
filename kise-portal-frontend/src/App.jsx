// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Register from './pages/Register';
// import Home from './pages/Home';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </Router>
//   );
// }
// export default App;
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

const routes = [
  // { path: '/', element: <Home /> },
  { path: '/', element: <Register /> },
  // { path: '*', element: <NotFound /> },
];

export default function App() {
  const routing = useRoutes(routes);
  return routing;
}