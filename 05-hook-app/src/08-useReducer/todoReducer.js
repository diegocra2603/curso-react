export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] add Todo':
            return [...initialState, action.payload]

        case '[TODO] delete Todo':
            return [...initialState.filter(x => x.id !== action.payload.id)]

        case '[TODO] update Todo':

        return initialState.map(todo => {

            if(todo.id === action.payload.id){
                return action.payload
            }

            return todo
        })

        default:
            return initialState;

    }
}  