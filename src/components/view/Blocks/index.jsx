import React , { Component }from 'react';
import { Table, TableBody, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import CustomTable from '../../CustomComponents/Table';
import CustomTableHeader from '../../CustomComponents/Table/TableHeader';
import CustomTableBody from '../../CustomComponents/Table/TableBody';

import BlockProperties from './BlockProperties.json';

const styles = theme => ({
    root: {
      width: '100%',
      // marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

const BlocksView = ({ classes, blocks }) => (
  <CustomTable title="Blocks View">
    <CustomTableHeader contents={BlockProperties} unsorted />
    <CustomTableBody properties={BlockProperties} contents={blocks} unsorted/>
  </CustomTable>
);

class BlocksViewClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: [],
    };
  }


  componentDidMount() {
    this._asyncRequest();
    setInterval(()=>this._asyncRequest(), 5000);
  }

  async _asyncRequest() {
    const request = await fetch('https://fusora.herokuapp.com/blocks');
    const blocks = await request.json();
    this.setState({
      blocks
    })
  }

  componentWillUnmount() {
    this.setState({
      blocks: []
    })
  }

  render() {
    const { classes } = this.props;
    return <BlocksView blocks={this.state.blocks} classes={classes}/>
  }

}

export default withStyles(styles)(BlocksViewClass);