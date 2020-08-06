export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Do stuff',
            completed: false,
            id: 38929237589
        },
        {
            item: 'Do more stuff',
            completed: false,
            id: 3892987593
        }
    ]
}

export function reducer(state, action){
    switch(action.type){
        default: return state;
    }
}