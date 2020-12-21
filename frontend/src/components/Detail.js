import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Form, InputNumber, Button, Result, Table } from 'antd';
import './detail.css'
import PostContext from '../context/postContext';

  
const Detail = () => {

    const postContext = useContext(PostContext);
  const { getPost, post, isNull } = postContext;
  
    const [form] = Form.useForm();

    const columns = [
        {
          title: 'Id',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Titulo',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Contenido',
          dataIndex: 'body',
          key: 'body',
        }
      ];
        const data = [
            {
                id: post ? [post.id] : '0',
                title: post ? [post.title] : 'a',
                body: post ? [post.body] : 'a'
            }
          ];
/* 
      console.log(data) */


    const validateMessages = {
        // eslint-disable-next-line
          required: '${label} es requerido',
          types: {
            // eslint-disable-next-line
            id: 'Por favor introduzca un id valido'
        }
    }

    const onFinish = values => {
        getPost(values.id)
    }

    return ( 
        <div>

        <div className="detail" style={{marginTop: '40px'}}>
        <Form
      style={{ marginLeft: 'auto !important', marginRight: 'auto !important'}}
      validateMessages={validateMessages}
        form={form}
        layout="vertical"
        name="form_in_modal"
        onFinish={onFinish}
        >

        <Form.Item
        name="id"
        label="ID"
        rules={[
            {
                required: true,
                message: 'Seleccione el ID',
            },
        ]}
        >
        <InputNumber />

        </Form.Item>
          <Form.Item>
        <Button type="primary" htmlType="submit" style={{marginLeft: '15px'}}>Submit</Button>
      </Form.Item>

        </Form>
          </div>
          <div>
              {isNull ?  <Result status="warning" title="Ingrese un ID valido"/> : null}
              {post ? <Table columns={columns} dataSource={data} /> : null}
          </div>
            </div>
     );
}
 
export default Detail;