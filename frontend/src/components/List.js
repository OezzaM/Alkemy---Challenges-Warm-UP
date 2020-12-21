import React, { useContext, useEffect } from 'react';
import { Table, Space, Button, Popconfirm, message  } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import PostContext from '../context/postContext';

const List = () => {

  const postContext = useContext(PostContext);
  const { showFormulario, getPosts, posts, currentPost, deletePost } = postContext;
  
    useEffect(() => {
      getPosts();
    }, [getPosts]);

  function confirm(e) {
    deletePost(e)
    message.success('Post eliminado');
  }

    const columns = [
        {
          title: 'Titulo',
          dataIndex: 'title',
          key: 'title',
          id: 1
        },
        {
          title: 'Accion',
          key: 'accion',
          id: 2,
          render: (text, record) => (
            <Space size="middle">
               <Button 
               icon={<EditTwoTone />  } 
               onClick={() => {
                currentPost(text)
                showFormulario(true);
              }}
               />
               <Popconfirm
                    title="¿Esta seguro que desea eliminar el post?"
                    onConfirm={() => confirm(text._id)}
                    okText="Si"
                    cancelText="No"
                    >
                    <Button icon={<DeleteTwoTone />}  />
                      
                </Popconfirm>
            </Space>
          )
        },
      ];

    return ( 
        <div >
            <Button
        type="primary"
        style={{border: 0, display: 'block', marginLeft: 'auto', margin:'10px 10px 0 auto'}}
        onClick={() => {
          currentPost(undefined)
          showFormulario(true)
        }}
      >
        Agregar un post
      </Button>
            <Table columns={columns} dataSource={posts} scroll={{ x: 1300 }} locale={{emptyText:'No hay posts cargados, ¡Agregue uno! '}} />
        </div>
        );

    }
 
export default List;