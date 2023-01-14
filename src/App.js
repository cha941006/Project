import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import { render } from '@testing-library/react';
import { createContext } from 'react';


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
  return (
    <div>
      {
        customers.map(c =>{
          return(
            <Customer
            key = {c.id}
            id ={c.id}
            image = {c.image}
            name = {c.name}
            birthday = {c.birthday}
            gender = {c.gender}
            job = {c.job}

            />

          )
        })
      }

    </div>
    )
}

export default App;
