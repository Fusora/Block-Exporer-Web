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

const PendingTransactionsView = ({ classes, pendingTransactions }) => (
	<div className={classes.body}>
			<CustomTable title={'Pending Transactions'}>
			{console.log(pendingTransactions)}
				<CustomTableHeader contents={TransactionProperties} unsorted />
				<CustomTableBody properties={TransactionProperties} contents={pendingTransactions} unsorted /> 
			</CustomTable> 
			{
				pendingTransactions.length === 0 && <h1> Waiting for Pending Transactions... </h1>
			}
	</div>
)

export default withStyles(styles)(PendingTransactionsView);
