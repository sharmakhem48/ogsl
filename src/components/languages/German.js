import React from 'react';
import './language.styles.css';
import DataTable from 'react-data-table-component';


class German extends React.Component {
  constructor() {
    super();
    this.state = {
      c1:[]
      }
    }

  componentDidMount() {
    fetch('http://127.0.0.1:5000/content')
    .then(response => response.json())
    .then(content => this.setState({c1:content}))
    .catch(error => console.log('I have errored'));
  }
    render() {
      const {German, columns} = this.state['c1'];
      return (
        <div className='table'>
        <div className='table-title'>German Course details</div>
        <DataTable className='table-content' data={German}
        columns={columns} />
        </div>
      )
   }
   };

export default German;
