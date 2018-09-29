import React from 'react';
import TimeAgo from 'react-timeago'

import { TableBody, TableRow, Chip, withStyles, Tooltip } from '@material-ui/core';
import CustomTableCell from '../TableCell';
import SliceString from '../../../tools/SliceString';

const bodyStyle = theme => ({
    row: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.background.default,
        },
    },
})

const CustomTableBody = ({ classes, properties, unsorted, contents }) => (
	<TableBody>
		{console.log(contents)}
	        {
	            unsorted ? 
	            contents.map((content, key) => {
	                return <TableRow className={classes.row} key={key}>
	                    {
	                        properties.map((property, propertyKey) => {
	                            if (typeof content[property.value] === 'number') {
	                                return <Tooltip title={content[property.value]} key={propertyKey}>
	                                	<CustomTableCell numeric>
	                                		{content[property.value]}
	                                	</CustomTableCell>
	                                </Tooltip>
	                            }

	                            if (property.value.match(/date/gi) !== null) {
	                            		return <CustomTableCell key={propertyKey}><TimeAgo date={content[property.value]} /></CustomTableCell>
	                            }

	                            if (content[property.value] instanceof Array) {
	                            	if (property.name.match(/count/gi) !== null) {
	                            		return <CustomTableCell key={propertyKey} numeric>{content[property.value].length}</CustomTableCell>
	                            	}
	                            	return <CustomTableCell key={propertyKey}>{content[property.value].map((x, arrKey) => <Tooltip title={x} key={arrKey}>
	                            		<Chip label={SliceString(x)} />
	                            		</Tooltip>
	                            	)}</CustomTableCell>
	                            }

	                            return <Tooltip title={content[property.value]} key={propertyKey}>
	                            	<CustomTableCell >{SliceString(content[property.value])}</CustomTableCell>
	                            </Tooltip>
	                        })
	                    }
	                </TableRow>
	            }) : contents.map((content, key) => {
	                return <TableRow className={classes.row} key={key}>
	                    {
	                        properties.sort().map((property, propertyKey) => {
	                             if (typeof content[property.value] === 'number') {
	                                return <Tooltip title={content[property.value]} key={propertyKey}>
	                                	<CustomTableCell numeric>{content[property.value]}</CustomTableCell>
	                                </Tooltip>
	                            }
	                            if (property.value.match(/date/gi)!==null) {
	                            		return <CustomTableCell key={propertyKey}><TimeAgo date={content[property.value]}/></CustomTableCell>
	                            }

	                            if (content[property.value] instanceof Array) {
	                            	if (property.value.match(/count/gi) !== null) {
	                            		return <CustomTableCell key={propertyKey} numeric>{content[property.value].length}</CustomTableCell>
	                            	}
	                            	return <CustomTableCell key={propertyKey}>{content[property.value].map((x, arrKey) => <Tooltip title={x} key={arrKey}>
	                            		<Chip label={SliceString(x)}/>
	                            		</Tooltip>
	                            	)}</CustomTableCell>
	                            }

	                            return <Tooltip title={content[property.value]} key={propertyKey}>
	                            	<CustomTableCell>{SliceString(content[property.value])}</CustomTableCell>
	                            </Tooltip>
	                        })
	                    }
	                </TableRow>
	            })
	        }
	</TableBody>
)

export default withStyles(bodyStyle)(CustomTableBody);