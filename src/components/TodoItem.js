import React, { Component } from 'react'
import './TodoItem.css'

export default class TodoItem extends Component {
      //성능 최적화 , 컴포넌트가 리렌더링을 할지 정해줌
    //   shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.todos !== nextProps.todos;
    // }

    render() {
        //text : todo내용, checked: 체크박스 상태, id:todo 고유아이디, onToggle:체크박스를 키고 끄는 함수, onRemove:아이템을 삭제시키는 함수
        const {text, checked, id, color, onToggle, onRemove} = this.props;
        return (
            <div className="todo-item" onClick={ ()=> onToggle(id)}>
                <button type="button" className="btn-remove" onClick={(e)=> {
                    e.stopPropagation(); //onToggle이 실행되지 않도록 함
                    onRemove(id)}}>&times;</button>
                <div style={{color}} className={`todo-text ${checked && 'checked'}`}><div>{text}</div></div> {/* "todo-text" + check && 'checked' 와 동일 */}
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}
