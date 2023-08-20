import { Fragment } from 'react'

import classes from '../layout/Header.module.css'

const Header = () => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1 className={classes.appName}>Crossfit notebook</h1>
			</header>
		</Fragment>
	)
}

export default Header
