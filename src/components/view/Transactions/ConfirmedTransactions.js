import React from 'react';

import { withStyles } from '@material-ui/core';
import CustomTable from '../../CustomComponents/Table';
import CustomTableHeader from '../../CustomComponents/Table/TableHeader';
import CustomTableBody from '../../CustomComponents/Table/TableBody';
import TransactionProperties from './TransactionProperties.json';

const styles = () => ({
	"body": {
		textAlign: 'center'
	},
})

const ConfirmedTransactionsView = ({ classes, confirmedTransactions }) => (
	<div className={classes.body}>
			<CustomTable title={'Confirmed Transactions'}>
				<CustomTableHeader contents={TransactionProperties} unsorted />
				<CustomTableBody properties={TransactionProperties} contents={confirmedTransactions} unsorted /> 
			</CustomTable> 
			{
				confirmedTransactions.length === 0 && <h1> Waiting for Confirmed Transactions... </h1>
			}
	</div>
)

export default withStyles(styles)(ConfirmedTransactionsView);
