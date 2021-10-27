import React from 'react';
import './App.css';
import axios from 'axios';

class MealDb extends React.Component {
    state = {
      mealCategories: {}
    }

  componentDidMount() {
    const apiUrl = 'https://themealdb.com/api/json/v1/1/categories.php';
    const apiUrl1 = 'https://themealdb.com/api/json/v1/1/search.php?s=Arrabiata';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => this.setState({ mealCategories: data }));

    // Make a request for a user with a given ID
    axios.get(apiUrl1)
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });  
  }
  render() {
    console.log("Categories",this.state.mealCategories.categories);
    const { mealCategories } = this.state;
    const result = Object.values(mealCategories);
    console.log("Resutl",result)

    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'red' }}>Welcome to Meal</h1>
             {result.map(item => {
                return item.map(i => {
                      return(<div style={{ textAlign: 'center', fontSize: 16 }}>{i.strCategory}</div>)
                 })
             })}
        </div>)
        ;
  }
}
export default MealDb;