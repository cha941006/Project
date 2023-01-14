import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import { render } from '@testing-library/react';
import { createContext } from 'react';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { TableBody } from '@mui/material';
import { withStyles}  from '@mui/material';
import Paper from '@mui/material/Paper';

const styles = theme =>({
  root:{
    width : '100%',
    marginTop : theme.spacing.unit *3,
    overflowX : "auto"
  },
  table:{
    minWidth : 1080
  }

})


const customers =[
{
  'id' : 1,
  'image' : 'https://placeimg.com/32/32/1',
  'name' : '차성민 ',
  'birthday' : '995959',
  'gender' : 'man',
  'job' : 'student'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/32/32/2',
  'name' : '차민경 ',
  'birthday' : '995959',
  'gender' : 'woman',
  'job' : 'banker'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/32/32/3',
  'name' : '차종원 ',
  'birthday' : '992225959',
  'gender' : 'man',
  'job' : 'student'
}
]

function App() {
  const {classes} = this.props;
  return (
    <Paper className = {classes.root}>    
      <Table className = {classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map(c =>{ return(<Customer key = {c.id} id ={c.id} image = {c.image} name = {c.name} birthday = {c.birthday} gender = {c.gender} job = {c.job}/>)})}   
        </TableBody>
      </Table>
    </Paper>
  )
}

export default withStyles(styles)(App);
