import { Form, Input, Button, message} from "antd";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig} from "../lib/base";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import AppelApi from "./AppelApi";
import {Navigate} from "react-router-dom"
import {UserAddOutlined} from '@ant-design/icons';
import {Typography} from "antd";

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const { Title} = Typography;

const Login = (props) => {
  const [loading, setLoading] = useState(false)
  const onFinish = (values) => {
    //Récupérer le pass et le mail dans values et la passer à la
    // methode signInWithEmailAndPassword

    setLoading(<LoadingOutlined/>)
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((credentials) => {
        console.log(credentials);
        setLoading(false);
       // <Route exact path="/travel" element={<AppelApi />} />
        props.setActiveComponent(<Navigate to="/travel" element={<AppelApi />}/>);
       
      })
      .catch((err) => {
        setLoading(false)
        message.error(err.message)
       // console.log(err.message);
      });

    // Récupérer le pas
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    
    <div>
      <div>
        <Title>Login as an user <UserAddOutlined /></Title>
      </div>
    <Form
      name="basic"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      
      <Form.Item
        label="email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit {loading}
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
  
};

export default Login;
