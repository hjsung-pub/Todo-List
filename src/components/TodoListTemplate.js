import React from 'react'
import './TodoListTemplate.css'

const TodoListTemplate = ({form, children, palette}) => {
    return(
        <main className="todo-list-template">
           <h1 class="title">오늘 할 일</h1>   
           <section>
               {palette}
           </section>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrappr">
                {children}
            </section>
        </main>
    )
}

export default TodoListTemplate;