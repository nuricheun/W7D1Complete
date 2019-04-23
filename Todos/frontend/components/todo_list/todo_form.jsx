import React from 'react';

class TodoForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            id: new Date(),
            title: "",
            body: ""
        };
        this.updateInputBody = this.updateInputBody.bind(this);
        this.updateInputTitle = this.updateInputTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Title:
                    <input onChange={this.updateInputTitle} type="text"/>
                </label>
                <label>Body:
                    <input onChange={this.updateInputBody} type="text" />
                </label>

                <input type="submit" value="Add New Todo" />
            </form >
        );
    }

    updateInputTitle (e) {
        this.setState({title: e.target.value});
    }
    updateInputBody (e) {
        this.setState({body: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTodo(this.state);
        this.setState = {
            id: new Date(),
            title: "",
            body: ""
        };
    }

}

export default TodoForm;

