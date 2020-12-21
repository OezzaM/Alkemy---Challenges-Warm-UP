import { SHOW_FORMULARIO, GET_POSTS, CURRENT_POST, CREATE_POST, UPDATE_POST, DELETE_POST, GET_POST, POST_NULL } from '../types'

const PostReducer = (state, action) => {
    
    switch (action.type){
        case SHOW_FORMULARIO:
            return {
                ...state,
                formulario: action.payload
            }
         case GET_POSTS: 
            return {
                ...state,
                posts: action.payload
            }
         case CURRENT_POST:
            return {
                ...state,
                _currentPost: action.payload
            }
         case CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
         case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map(post => post._id === action.payload._id ? action.payload : post )
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload),
            }
        case GET_POST:
            return {
                ...state,
                post: action.payload,
                isNull: false
            }
        case POST_NULL:
            return {
                ...state,
                isNull: action.payload,
                post: undefined
            }
    default: 
        return state;
    }
}

export default PostReducer