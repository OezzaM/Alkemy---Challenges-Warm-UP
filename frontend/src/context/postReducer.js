import { FORMULARIO_OPERACION, OBTENER_POSTS } from '../types'

const PostReducer = (state, action) => {
    
    switch (action.type){
        case FORMULARIO_OPERACION:
            return {
                ...state,
                formulario: action.payload
            }
         case OBTENER_POSTS: 
            return {
                ...state,
                posts: action.payload
            }
    default: 
        return state;
    }
}

export default PostReducer