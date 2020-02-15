import React, { Component } from 'react'
import Proptypes from 'prop-types';

export class Todoitem extends Component {

    getStyle = () => {
    return {
        background: 'lightgray',
        padding: '10px',
        borderBottom: '1px black dotted',
        textDecoration: this.props.row.completed ? 'line-through' : 'none',
    }
    }


    render() {
        const {id, title} = this.props.row;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}
                    /> { ' ' }
                    {title}
                    <button className="spinn" onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

Todoitem.propTypes = {
    row: Proptypes.object.isRequired,
    markComplete: Proptypes.func.isRequired,
    delTodo: Proptypes.func.isRequired
}


const btnStyle = {
 backgroundColor: 'red',
 color: '#fff',
 border: 'none',
 padding: '5px 9px',
 borderRadius: '50%',
 cursor: 'pointer',
 float: 'right'
}

export default Todoitem
