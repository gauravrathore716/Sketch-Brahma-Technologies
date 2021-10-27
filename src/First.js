import React from 'react';
import './App.css';
import { Chip, Button, List, ListItem, Subheader, TextField, FontIcon, CircularProgress } from 'react-md';
import { SelectionControl, Checkbox, Switch } from 'react-md';

class First extends React.Component {
  state = {
    check: false,
    checkId: '',
    checkItem: false,
    unCheckITem: []
  };

  onCheckHeader = (e,id) => {
    if (e.target.checked === true) {
      this.setState({
        check: true,
        checkId: id,
        checkItem: true
      });
    } else {
      this.setState({
        check: false,
        checkId: id,
        checkItem: false,
      });
    }
  };

  onCheckItem = (e,id) => {
      console.log(e.target.checked);
      console.log(id);

          if (e.target.checked === true) {

              let index = this.state.unCheckITem.indexOf(id);
              if (index > -1) {
                //Make sure item is present in the array, without if condition, -n indexes will be considered from the end of the array.
                this.state.unCheckITem.splice(index, 1);
              }

                this.setState({
                  checkId: id,
                  checkItem: true,
                  unCheckITem: this.state.unCheckITem,
                });

          } else {
                const arr = [];
                arr.push(id);
                this.state.unCheckITem.push(id);

                this.setState({
                  checkId: id,
                  checkItem: false,
                  unCheckITem: this.state.unCheckITem,
                });
          }

  }

  render() {
      //console.log(this.state.id);
      console.log("checkITem",this.state.unCheckITem);
      const array = ['6452NA','7517QN', '1821TD', '3791CO'];

    return (
      <div>
        First
        <Checkbox
          id="checkbox"
          name="checkbox"
          label="Check All"
          // value="material-design"
          style={{ margin: 20 }}
          onChange={(e) => this.onCheckHeader(e,0)}
          checked={this.state.check}
        />
        <div> 
          {array.map((item,i) => {

               if (this.state.unCheckITem.indexOf(i) !== -1) {
                // alert("Value exists!");
                console.log("exist")

                 return (
                   <Checkbox
                     id="1"
                     name="1"
                     label="Check All"
                     style={{ margin: 20 }}
                     checked={false}
                     onChange={(e) => this.onCheckItem(e, i)}
                   />
                 );
               } else {
                 //alert("Value does not exists!");
                 console.log("Not exist");
                   return (
                     <Checkbox
                       id="1"
                       name="1"
                       label="Check All"
                       style={{ margin: 20 }}
                       checked={this.state.check}
                       onChange={(e) => this.onCheckItem(e, i)}
                     />
                   );
               }
          })}
        </div>
      </div>
    );
  }
}

export default First;
