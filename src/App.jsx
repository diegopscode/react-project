import React from 'react';

import 'assets/scss/App.scss';
import Logo from 'assets/img/react_logo.svg';

class App extends React.PureComponent {
	render() {
		return (
			<div className="container">
				<img src={Logo} height="480"/>
			</div>
		);
	}
}

export default App;
