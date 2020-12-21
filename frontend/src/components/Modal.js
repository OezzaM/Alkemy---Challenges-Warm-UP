import React,{ useEffect, useContext } from 'react';
import PostContext from '../context/postContext';
import 'antd/dist/antd.css';
import { Modal, Form, Input } from 'antd';

const Modals = () => {
    
  // Obtener el state del formulario
  const postContext = useContext(PostContext);
  const { formulario, showFormulario, _currentPost, createPost, updatePost } = postContext;
  
  
  const [form] = Form.useForm();

  const onCancel = () => {
    form.resetFields();
    showFormulario(!formulario);
    
  };

  useEffect(() => {
    if(_currentPost){
      const { title, body } = _currentPost;
      form.setFieldsValue({
        title,
        content: body
      });
    }else{
      form.resetFields();
    }
  }, [_currentPost, form])
    
    // eslint-disable-next-line
    const validateMessages = {
      // eslint-disable-next-line
        required: '${label} es requerido',
        types: {
          // eslint-disable-next-line
          email: 'Por favor introduzca un mail valido',
          // eslint-disable-next-line
          number: '${label} is not a validate number!',
          // eslint-disable-next-line
        },// eslint-disable-next-line
        number: {
          // eslint-disable-next-line
          range: '${label} must be between ${min} and ${max}',
        },
      };
    return ( 
      <Modal
      visible={formulario}
      title="Agregar una nueva operacion"
      okText="Agregar"
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={() => {
        form
        .validateFields()
        .then((values) => { 
          form.resetFields();
          showFormulario(!formulario);
          if(_currentPost){
            values = {...values, id: _currentPost.id}
            updatePost(values)
          }else{
            createPost(values)
          }
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
forceRender
    >
      <Form
      style={{ marginLeft: 'auto !important', marginRight: 'auto !important'}}
      validateMessages={validateMessages}
        form={form}
        layout="vertical"
        name="form_in_modal"
        >
       <Form.Item
          name="title"
          label="Concepto"
          hasFeedback
          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          rules={[
            {
              required: true,
              message: 'Seleccione un titulo',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="content" label="Contenido" hasFeedback rules={[
          {
            required: true,
            message: 'Seleccione un contenido',
          },
        ]}>
          
          <Input.TextArea showCount style={{resize: 'none'}} maxLength={100} />
        </Form.Item>
  
      </Form>
    </Modal>
     );
}
 
export default Modals;