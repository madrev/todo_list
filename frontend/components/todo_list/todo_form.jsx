import React from 'react';
import uniqueId from '../../util/unique_id';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title:"", body:"", done:false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    // this.setState({id: uniqueId()});
    this.props.createTodo({todo: this.state}).then(() => {
      this.setState({ title:"", body:"", done:false });
    });
  }

  updateTitle(e){
    this.setState({title: e.target.value});
  }

  updateBody(e){
    this.setState({body: e.target.value});
  }

  render() {
    return <form className="new-todo-form" onSubmit={this.handleSubmit}>
      <input
        type='text'
        onChange={this.updateTitle}
        className='todoFormInput'
        placeholder='Task...'
        value={this.state.title}
        ></input>
      <textarea
        onChange={this.updateBody}
        className='todoFormInput'
        placeholder='Details...'
        value={this.state.body}></textarea>
      <span>{this.props.errors}</span>
      <button>Add ToDo</button>
    </form>;
  }
}

export default TodoForm;
