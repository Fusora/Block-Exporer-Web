import React, { Component } from 'react';

class PeersViewClass extends Component {

	async componentDidMount() {
		const peers = await fetch('https://fusora.herokuapp.com/peers');
		const result = await peers.json();
		console.log(result);
	}

	render() {
		return <PeersView />
	}
}

const PeersView = () => (
    <div>
        <h1>Peers View</h1>
    </div>
)

export default PeersViewClass;