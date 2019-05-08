import React, {Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import UserBreadCrumb from './controller/UserBreadCrumb'
import {Grid, Segment, GridColumn,Button} from 'semantic-ui-react'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tables:   ['Home','Store','T-Shirt','Sales'] 
    }

  }

  handleItemClick = ()=>{
    const {tables} = this.state;
    this.setState({
      tables : tables.map((name , i) =>(i===3)?"Sales3":name)
    })
  }
  render(){
    return (    
      <>
      <Segment style={{ margin: "0px" }}> 
        <Grid >
          <GridColumn width={3}>1</GridColumn>
          <GridColumn width={6}>2</GridColumn>
          <GridColumn width={4}>3</GridColumn>
          <GridColumn width={3}>4</GridColumn>
        </Grid>
      </Segment>


      <Segment  style={{ height:"30px",margin: "0px",padding:"5px" }}>
        <UserBreadCrumb tables= {this.state.tables}/>
      </Segment>

      <Button content="눌러주세요" onClick={this.handleItemClick}></Button>
      </>
    );
  }
}

export default App;
