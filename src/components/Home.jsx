import React, { Component } from 'react'
import { Button } from 'antd';
import { connect } from "react-redux";
import { loadRecipe } from "../redux/actions";

class Home extends Component {

    state={

    }

    load = (e) =>{
        this.props.loadRecipe()
        console.log('load clicked')
        this.setState=({
            pageid:this.props.match.params.id,
            type: 'load'},()=>{
            let state = this.state
            this.props.loadRecipe(state)})
    }
    render() {
        return (
            <div>
                <Button onClick={this.load} style={{margin:'10% 50%'}} type="primary">Load</Button>
                <Button href="/recipe/21" style={{margin:'10% 50%'}} type="primary">Redirect</Button>

            </div>
        )
    }
}
const mapStateToProps = ({ isLoading, recipe, error }) => ({
    isLoading,
    recipe,
    error, 
 });
 
 const mapDispatchToProps = dispatch => ({
   loadRecipe: (state) => dispatch(loadRecipe(state)),
 })


 export default connect(mapStateToProps, mapDispatchToProps)(Home);