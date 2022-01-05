const filterTodo = (todos, status)=>{
    switch (status){
        case 'AKTYVIOS':
            return todos.filter(todo=>todo.isComplete === false)
        case 'PABAIGTOS':
            return todos.filer(todo=>todo.isComplete === true) 
    }

}

export default filterTodo