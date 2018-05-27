import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentNew from './ComponentNew.js'
import SnackBar from './SnackBar'
import ListItem from "./ListItem";
import InputBox from './InputBox'
import listStore from '../Stores/ListStore'
import * as ListActions from '../Actions/ListAction'
class App extends Component {

    constructor(props){
        super(props);
        this.state={
            state:null,
            text:"Some Text",
            list:listStore.getAll(),
        }
    };
    componentWillMount() {
        console.log("Component Mount");
        listStore.on("change", this.getList);
    }

    componentWillUnmount() {
        console.log("Component unMount");

        listStore.removeListener("change", this.getList);
    }
    getList=()=> {
        this.setState({
            list: listStore.getAll(),
        });
    };
    handleClick=(input)=>
    {
        this.setState({
            text:input,
            state:"show"
        });
        console.log("nooww");
        setTimeout(function () {
            console.log("started");
            this.setState({
                text:input,
                state:""
            })
        }.bind(this),3000);

    };

    handleInputBoxClick=(text)=>
    {
        if(text !== null)
        {
            console.log(text);
            ListActions.createItem(text);
            // this.getList();
            // console.log(this.listStore.getAll())

        }
    };
  render() {
      const variable = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
      const { list } = this.state;
      const ListItems = list.map((item) =>{
          return <ListItem key={item.id} input={item.subheading} input2={item.heading} clickHandler={this.handleClick}/>;
      });
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
          {/*<div className="table-custom">*/}
              {/*<div>*/}
                        {/*<ComponentNew input={variable} clickHandler={this.handleClick}/>*/}
              {/*</div>*/}
              {/*<div>*/}
                      {/*<ComponentNew input="is" clickHandler={this.handleClick}/>*/}
              {/*</div>*/}
                  {/*<div>*/}
                      {/*<ComponentNew input="A" clickHandler={this.handleClick}/>*/}
                  {/*</div>*/}
          {/*</div>*/}
          {/*<ComponentNew input="B" clickHandler={this.handleClick}/>*/}
          {/*<ComponentNew input="C" clickHandler={this.handleClick}/>*/}
          {/*<ComponentNew input="D" clickHandler={this.handleClick}/>*/}
          {/*<ComponentNew input="E" clickHandler={this.handleClick}/>*/}
          {/*<div style={{paddingTop:200}}>*/}
              {/*<ListItem input="Item Subtext which is long because descriptions are long , aren't they?*/}
                        {/*Item Subtext which is long because descriptions are long , aren't they?" clickHandler={this.handleClick}/>*/}
              {/*<ListItem input="Gaurav Subedar" clickHandler={this.handleClick}/>*/}
              {/*<ListItem input="Kamaludin" clickHandler={this.handleClick}/>*/}
              {/*<ListItem input="Item Subtext which is long because descriptions are long , aren't they?*/}
                    {/*Item Subtext which is long because descriptions are long , aren't they?" clickHandler={this.handleClick}/>*/}
          {/*</div>*/}
          {/*<SnackBar state={this.state.state} text={this.state.text}/>*/}
          <div style={{paddingBottom:50,paddingTop:200}}>
              {ListItems}
          </div>
          <InputBox clickHandler={this.handleInputBoxClick}/>
          <SnackBar state={this.state.state} text={this.state.text}/>

      </div>
    );
  }
}

export default App;
