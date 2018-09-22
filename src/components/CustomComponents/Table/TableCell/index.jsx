import { TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        lineHeight: "1.42857143",
    	padding: "12px",
    	verticalAlign: "middle"
    },
    body: {
	    fontSize: 14,
        lineHeight: "1.42857143",
        padding: "12px",
        verticalAlign: "middle"
    },
})

export default withStyles(styles)(TableCell);