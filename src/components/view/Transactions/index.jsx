import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

import ConfirmedTransactions from './ConfirmedTransactions';
import PendingTransactions from './PendingTransactions';

const TransactionsView = ({ confirmedTransactions, pendingTransactions }) => (
	<Grid container>
		<Grid item sm={12} md={12}>
			<h1>Transactions View</h1>
		</Grid>
		<Grid item sm={12} md={12}>
			<PendingTransactions pendingTransactions={pendingTransactions} />
		</Grid>
		<Grid item sm={12} md={12}>
			<ConfirmedTransactions confirmedTransactions={confirmedTransactions} />
		</Grid>
	</Grid>
)

class TransactionViewClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			confirmedTx: [],
			pendingTx: [],
		}
	}

	async componentDidMount() {
		this._asyncRequest();
		setInterval(()=>this._asyncRequest(), 5000);
	}

	_asyncRequest = async () => {
		const confirmedTxRequest = await fetch('https://fusora.herokuapp.com/transactions/confirmed');
		const pendingTxRequest = await fetch('https://fusora.herokuapp.com/transactions/pending')
		const confirmedTx = await confirmedTxRequest.json();
		const pendingTx = await pendingTxRequest.json();

		this.setState({
			confirmedTx,
			pendingTx
		});
	}

	componentWillUnmount() {
		this.setState({
			confirmedTx: [],
			pendingTx: [],
		});
	}

	render() {
		return <TransactionsView confirmedTransactions={this.state.confirmedTx} pendingTransactions={this.state.pendingTx}/>
	}
}

export default TransactionViewClass;