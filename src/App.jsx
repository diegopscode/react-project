import Logo from '@images/react_logo.svg';
import '@scss/index.scss';
import React from 'react';


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
