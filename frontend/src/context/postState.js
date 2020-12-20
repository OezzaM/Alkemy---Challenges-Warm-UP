import React, { useReducer } from 'react';

import PostContext from './postContext';
import PostReducer from './postReducer';
import clienteAxios from '../config/axios';
import { FORMULARIO_OPERACION, OBTENER_POSTS } from '../types'

const PostState = props => {

    const initialState = {
        posts: [],
        formulario : false
    }

    const [state, dispatch] = useReducer(PostReducer, initialState);


    const mostrarFormulario = (formulario) => {
        dispatch({
            type: FORMULARIO_OPERACION,
            payload: formulario
        })
    }

    const obtenerPosts = async () => {
        try {
            const resultado = await clienteAxios.get('https://jsonplaceholder.typicode.com/posts');
            
            dispatch({
                type: OBTENER_POSTS,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <PostContext.Provider
            value={{
                posts: state.posts,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerPosts
            }}
        >
            {props.children}
        </PostContext.Provider>
    )
}


export default PostState;