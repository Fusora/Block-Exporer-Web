import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

import AccountProperties from './AccountProperties';
import CustomTable from '../../CustomComponents/Table';
import CustomTableBody from '../../CustomComponents/Table/TableBody';
import CustomTableHeader from '../../CustomComponents/Table/TableHeader';


const AccountsView = ({ accounts }) => (
    <Grid container>
  			<CustomTable title={'Accounts View'}>
  				<CustomTableHeader contents={AccountProperties} unsorted />
  				<CustomTableBody properties={AccountProperties} contents={accounts} unsorted />
  			</CustomTable>
    </Grid>
)

class AccountsViewClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			accounts: []
		}
	}

	async componentDidMount() {
		this._makeAsyncRequest();
		setInterval(()=>this._makeAsyncRequest(), 1000);
	}

	_makeAsyncRequest = async () => {
		const request = await fetch('https://fusora.herokuapp.com/balances');
		const pendingAccounts = await request.json();
		const accounts = pendingAccounts.pendingBalances;
		Object.keys(accounts).forEach(account => {
			let hasAccount = this.state.accounts.filter(a => a.address === account);
			if (hasAccount.length > 0) {
				if(hasAccount[0].balance === accounts[account]) {
					return;
				} else {
					this.setState({
						accounts: [...this.state.accounts, hasAccount[0].balance = accounts[account]].splice(0, this.state.accounts.length)
					});				
					return
				}
			} else{
				this.setState({
					accounts: this.state.accounts.concat({ address: account, balance: accounts[account] })
				});
			}
		});
	}

	render() {
		return <AccountsView accounts={this.state.accounts}/>;
	}

}

export default AccountsViewClass;