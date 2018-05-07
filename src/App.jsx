import React, { Component, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'

import '@scss/index.scss'

import RouterContainer from "./route"

import Header from "./components/base/header"
import Nav from "./components/base/nav"
import Footer from "./components/base/footer"


class App extends Component {

	render() {
		return (
			<div className="app-container">
				<BrowserRouter>
					<Fragment>

						<Header />
						<Nav />

						<main className="main-content">
							<RouterContainer />
						</main>

						<Footer />
						
					</Fragment>
				</BrowserRouter>
			</div>
		)
	}
	
}

export default App;
