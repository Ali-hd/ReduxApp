import React, { Component } from 'react'
import { connect } from "react-redux";

class Recipe extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = ({recipe}) => ({
    recipe,
 });

 export default connect(mapStateToProps)(Recipe);