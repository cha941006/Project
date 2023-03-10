import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import { render } from '@testing-library/react';
import { createContext } from 'react';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {  withStyles } from '@material-ui/styles';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  root: {
    width: "100%",
    overflowX: "auto" },
  table: {
    minWidth: 1080},
  progress: {
    margin: 2
  }
};
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      customers: '',
      completed: 0
    }
    this.stateRefresh = this.stateRefresh.bind(this);
  }
  stateRefresh() {
    this.setState({
      customers: '',
      completed: 0
    });
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  componentDidMount() {
      this.callApi()
      .then(res=> this.setState({customers:res}))
      .catch(err => console.log(err));
    }
   
  
  componentWillUnmount() {
    clearInterval(this.timer);}

  callApi = async()=>{
      const response = await fetch('api/customers');
      const body = await response.json();
      return body;
    }
  
  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  }
  render() {
    const {classes} = this.props;
    return(
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
                <TableCell>설정</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ?
                this.state.customers.map(c => {
                  return <Customer stateRefresh={this.stateRefresh} key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
                }) :
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
                  </TableCell>
                </TableRow>
              }
            </TableBody>
          </Table>

        </Paper>
        <CustomerAdd stateRefresh={this.stateRefresh} />

      </div>
    );
  }
}
export default withStyles(styles)(App)