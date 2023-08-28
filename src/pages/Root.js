import { Outlet } from 'react-router-dom'

import Nav from '../components/ui/NavBar'


function RootLayout() {
	return (
		<>
			<Nav />
            <main>
            <Outlet />

            </main>
		</>
	)
}

export default RootLayout