import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import HomePage from './pages/Home'

import WodPage from './pages/Wod'
import PrevWodPage from './pages/PrevWod'
import AboutPage from './pages/About'


const routeDefintions = createRoutesFromElements(
	<Route>
		<Route path="/" element={<HomePage />} />
		<Route path="/wod" element={<WodPage />} />
		<Route path="/previous" element={<PrevWodPage />} />
		<Route path="/about" element={<AboutPage />} />
		
	</Route>

);


const router = createBrowserRouter(routeDefintions);

function App() {
	return (
		<RouterProvider router={router} />
		
	)
}

export default App
