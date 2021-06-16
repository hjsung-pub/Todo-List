import React, { Component } from 'react'
import TodoItem from './TodoItem';

//리스트를 렐더링 하게 될때는, 특히 보여주는 리스트가 동적인 경우엔 함수형이 아닌 클래스형 컴포넌트로 작성해야하는데, 클래스형 컴포넌트로 작성해야 나중에 컴포넌트 성능 최적화를 할 수 있기 때문이다.
export default class TodoItemList extends Component {

    //성능 최적화 , 컴포넌트가 리렌더링을 할지 정해줌
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    

    render() {                                       
        //todos:todo 객체들이 들어있는 배열, onToggle:체크박스를 키고 끄는 함수, onRemove : 아이켐을 삭제시키는 함수                           
        const {todos, onToggle, onRemove} = this.props;

        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem 
                 id={id} 
                 text={text} 
                 checked={checked} 
                 onToggle={onToggle}
                 onRemove={onRemove}
                 key={id}
                />
            )
            //아래와 같은 형태여야 하지만, 함수의 파라미터부분에서 비구조화 할당을 하여 객체 내부의 값들을 따로 레퍼런스를 만들어 주었다.
            // (todo) => (
            //     <TodoItem
            //     {...todo}
            //     onToggle={onToggle}
            //     onRemove={onRemove}
            //     key={todo.id}
            //     />
            // )
        )
        return (    
            <div>
                {todoList}
                {/* <TodoItem text="안녕" />
                <TodoItem text="리액트" />
                <TodoItem text="반가워" /> */}
            </div>
        )
    }
}

