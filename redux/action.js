export const ADD_TODO = 'ADD_TODO';
export default function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text
    };
}