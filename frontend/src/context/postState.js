import React, { useReducer } from 'react';

import PostContext from './postContext';
import PostReducer from './postReducer';
import clienteAxios from '../config/axios';
import { SHOW_FORMULARIO, GET_POSTS, CURRENT_POST, CREATE_POST, UPDATE_POST, DELETE_POST, GET_POST, POST_NULL } from '../types'

const PostState = props => {

    const initialState = {
        posts: [],
        formulario : false,
        _currentPost: null,
        post: null,
        isNull: false
    }

    const [state, dispatch] = useReducer(PostReducer, initialState);


    const showFormulario = (formulario) => {
        dispatch({
            type: SHOW_FORMULARIO,
            payload: formulario
        })
    }

    const getPosts = async () => {
        try {
            const resultado = await clienteAxios.get('https://jsonplaceholder.typicode.com/posts');
            
            dispatch({
                type: GET_POSTS,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const currentPost = post => {
        dispatch({
            type: CURRENT_POST,
            payload: post
        })
    }

    const createPost = async post => {
        try {
            const resultado = await clienteAxios.post('https://jsonplaceholder.typicode.com/posts', post)
        
        dispatch({
            type: CREATE_POST,
            payload: resultado.data
        })
        } catch (error) {
            console.log(error)
        }
    }

    const updatePost = async post => {
        try {
            const resultado = await clienteAxios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post);
            
            dispatch({
                type: UPDATE_POST,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    const deletePost = async postId => {
        try {
            await clienteAxios.delete(` https://jsonplaceholder.typicode.com/posts/${postId}`)
            dispatch({
                type: DELETE_POST,
                payload: postId
            })
        } catch (error) {
            console.log(error);
        }
    }

    const getPost = async postId => {
        try {
            const resultado = await clienteAxios.get(` https://jsonplaceholder.typicode.com/posts/${postId}`);
            dispatch({
                type: GET_POST,
                payload: resultado.data
            })
        } catch (error) {
            dispatch({
                type: POST_NULL,
                payload: true
            })
        }
    }


    return (
        <PostContext.Provider
            value={{
                posts: state.posts,
                formulario: state.formulario,
                _currentPost: state._currentPost,
                post: state.post,
                isNull: state.isNull,
                showFormulario,
                getPosts,
                currentPost,
                createPost,
                updatePost,
                deletePost,
                getPost
            }}
        >
            {props.children}
        </PostContext.Provider>
    )
}


export default PostState;