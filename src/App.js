import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import TodoItemList from './components/TodoItemList';
import Form from './components/Form';
import Palette from './components/Palette';
import './index.css';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {

  id=3 //이미 0,1,2가 존재하므로 3으로 설정

  state={
    input: '',
    todos: [
      {id:0, text:'리액트 공부', checked:false},
      {id:1, text:'리액트 적용', checked:true},
      {id:2, text:'리액트 소개', checked:false}
    ],
    color:'#343a40'
  }

  handleChange = (e) =>{
    this.setState({
      input:e.target.value
    });
  }

  handleCreate = () =>{
    const {input, todos, color} = this.state;
    
    if(input === '') { alert("내용을 입력해주세요"); return}
    this.setState({
      input:'',
      todos:todos.concat({
        id : this.id++,
        text: input,
        checked : false,
      }),
      color
    });
  }

  handleKeyPress = (e) =>{
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  handleToggle = (id) =>{
    const {todos} = this.state;

    // 파라미터로 받은 id를 가지고 몇번째 아이템인지 찾습니다. 
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; //선택한 객체

    const nextTodos = [...todos]; //배열복사
    
    //기존의 값들을 복사하고, checked값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };
    
    this.setState({
      todos : nextTodos
    })
  }

  handleRomve = (id) => {
    const {todos} = this.state;
    this.setState({
      todos : todos.filter(todo => todo.id !== id)
    });
  }

  handleSelect = (color) =>{
    this.setState({
      color : color
    })
  }

  render(){
    const {input, todos, color} = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRomve,
      handleSelect
    } = this;

    return (
      <TodoListTemplate form={(
      <Form
        value={input}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}
      />
      )} palette= {(
      <Palette
        colors={colors}
        selected={color}
        onSelect={handleSelect}
      />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRomve}/>
      </TodoListTemplate>
    );
  }
  
}

export default App;
