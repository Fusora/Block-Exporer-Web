import React from 'react';
import { Paper, Table } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      // overflowX: "auto",
      // paddingLeft: theme.spacing.unit * 5,
      // paddingRight: theme.spacing.unit * 5
    },
    table: {
      marginBottom: "0",
      width: "100%",
      maxWidth: "100%",
      backgroundColor: "transparent",
      borderSpacing: "0",
      borderCollapse: "collapse",
    },
 });

const CustomTable = ({ classes, title, children }) => (
	<Paper className={classes.root}>
      <h1>{title}</h1>
      <Table className={classes.table}>
         {children}
      </Table>
  </Paper>
)

export default withStyles(styles)(CustomTable);