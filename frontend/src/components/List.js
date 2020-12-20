import React, { useContext, useEffect } from 'react';
import { Table, Space, Button, Popconfirm, message  } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import PostContext from '../context/postContext';

const List = () => {

  const postContext = useContext(PostContext);
  const { mostrarFormulario, obtenerPosts, posts } = postContext;
  
    useEffect(() => {
      obtenerPosts();
    }, [obtenerPosts]);

  function confirm(e) {
    /* eliminarProyecto(e) */
    message.success('Operacion eliminada');
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
                /* guardarOperacionActual(text)
                mostrarFormulario(true); */
              }}
               />
               <Popconfirm
                    title="¿Esta seguro que desea eliminar la operacion?"
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
          /* guardarOperacionActual(undefined) */
          mostrarFormulario(true)
        }}
      >
        Agregar un post
      </Button>
            <Table columns={columns} dataSource={posts} scroll={{ x: 1300 }} locale={{emptyText:'No hay posts cargados, ¡Agregue uno! '}} />
        </div>
        );

    }
 
export default List;