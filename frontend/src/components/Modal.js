import React,{ useEffect, useContext } from 'react';
import PostContext from '../context/postContext';
import 'antd/dist/antd.css';
import { Modal, Form, Input, InputNumber, Select } from 'antd';
import { v4 as uuidv4 } from 'uuid';

const Modals = () => {
    
  // Obtener el state del formulario
  const postContext = useContext(PostContext);
  const { formulario, mostrarFormulario, } = postContext;
  
  
  const [form] = Form.useForm();

  const onCancel = () => {
    form.resetFields();
    mostrarFormulario(!formulario);
    
  };

  /* useEffect(() => {
    if(operacionseleccionada){
      const { concepto, monto, categoria, tipo } = operacionseleccionada
      form.setFieldsValue({
        concepto,
        monto,
        categoria,
        tipo
      });
    }else{
      form.resetFields();
    }
  }, [operacionseleccionada, form]) */
    
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
          mostrarFormulario(!formulario);
          /* if(operacionseleccionada){
            values = {...values, key: operacionseleccionada.key, fecha: operacionseleccionada.fecha , creador: operacionseleccionada.creador, _id: operacionseleccionada._id }
            actualizarOperacion(values)
          }else{
            values = {...values, key: uuidv4()}
            agregarOperacion(values)
          } */
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
          name="concepto"
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
        <Form.Item name="contenido" label="Contenido" hasFeedback rules={[
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