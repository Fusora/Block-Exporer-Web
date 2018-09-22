import React from 'react';
import { TableHead, TableRow, withStyles } from '@material-ui/core';
import CustomTableCell from '../TableCell';
import SortByKey from '../../../tools/SortByKey';

const CustomTableHeader = ({ contents, unsorted }) => (
	<TableHead>
	    <TableRow>
	        {
	        	unsorted ?
	            contents.map((content, key) => {
	                if (content.numeric === true) {
	                    return <CustomTableCell numeric key={key}>{content.name}</CustomTableCell>
	                } 
	                return <CustomTableCell key={key}> {content.name} </CustomTableCell>
	            }) :
	            SortByKey(contents, 'name').map((content, key) => {
	                if (content.numeric === true) {
	                    return <CustomTableCell numeric key={key}>{content.name}</CustomTableCell>
	                } 
	                return <CustomTableCell key={key}> {content.name} </CustomTableCell>
	            })
	        }
	    </TableRow>
	</TableHead>
)

export default CustomTableHeader;
