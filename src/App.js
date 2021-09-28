import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '한서희',
  'birthday': '950401',
  'gender': '여자',
  'job': '취준생',
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '어피치',
  'birthday': '210928',
  'gender': '여자',
  'job': '복숭아',
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '죠르디',
  'birthday': '210929',
  'gender': '여자',
  'job': '공룡',
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
