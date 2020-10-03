import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/SearchBox/SearchBox.component';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contribs: [],
			searchField: ''
		};
	}

	handleChange = e => {
		this.setState({
			searchField: e.target.value
		});
	};

	componentDidMount() {
		document.title = 'Hackodex'
		fetch('https://api.github.com/repos/Hackodex-ITER/CSES-Problems/contributors')
			.then(response => response.json())
			.then(users => this.setState({ contribs: users }));
	}
	render() {
		const { contribs, searchField } = this.state;
		const filteredUsers = contribs.filter(contrib =>
			contrib.login.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="App">
				<h1>Hackodex Contributors</h1>
		<h2 style={{color:"#fff"}}>Total Contributors:<br/>{contribs.length}</h2>
				<SearchBox
					searchField={searchField}
					placeholder="Search users"
					handleChange={this.handleChange}
				/>
				<CardList users={filteredUsers} />
				<footer>
				<div className="footer">
					Made with :) by<br/><a href="https://github.com/pritam047">Pritam Kar</a>
				</div>
			</footer>
			</div>
			
		);
	}
}

export default App;
