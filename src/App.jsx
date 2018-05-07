import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Logo from '@images/react_logo.svg';
import '@scss/index.scss';

import RouterContainer from "./route"

import Header from "./components/base/header"
import Footer from "./components/base/footer"


class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<Fragment>

					<Header />

					<RouterContainer />

					<Footer />
					
				</Fragment>
			</BrowserRouter>
		)
	}
	
}

export default App;
