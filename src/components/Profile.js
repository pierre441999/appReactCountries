import { Form, Input, message, Button } from "antd";
import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import { initializeApp } from "@firebase/app";
import { firebaseConfig} from "../lib/base";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { collection, addDoc,getFirestore} from "firebase/firestore";
import {Typography} from "antd";
import {UserAddOutlined} from '@ant-design/icons';

const { Title} = Typography;
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore();

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState();

  const inputLabels = [

    {
        label: "Nom",
        name: "name",
        required: true,
        message: "Veuillez saisir vote Nom",
        type: "text",
        action: (e) => {
            setState({ ...state, name: e.target.value});

        },
      },
    {
      label: "Prénom",
      name: "firstName",
      required: true,
      message: "Veuillez saisir vote prénom",
      type: "text",
      action: (e) => {
    setState({ ...state, firstName: e.target.value});
        },
    },
    {
      label: "Âge",
      name: "age",
      required: true,
      message: "Veuillez saisir vote âge",
      type: "number",
      action: (e) => {
        setState({ ...state, age: e.target.value});
        },
    },
    {
      label: "Email",
      name: "email",
      required: true,
      message: "Veuillez saisir vote email",
      type: "email",
      action: (e) => {
        setState({ ...state, email: e.target.value});
        },
    },
    {
      label: "Mot De Passe",
      name: "password",
      required: true,
      message: "Veuillez saisir vote mot de passe",
      type: "password",
      action: (e) => {
        setState({ ...state, password: e.target.value});
        },
    },
  ];

  const createInputLabels = (label) => {
    return (
      <Form.Item
        key={label.name}
        label={label.label}
        name={label.name}
        rules={[
          {
            required: label.required,
            message: label.message,
          },
        ]}
      >
        <Input type={label.type} onChange={label.action} />
      </Form.Item>
    );
  };
  const onFinish = (values) => {
    //Récupérer le pass et le mail dans values et la passer à la
    // methode signInWithEmailAndPassword
    setLoading(<LoadingOutlined />);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((credentials) => {
        console.log(credentials);
        addDoc(collection(db, "users"), state) 
            .then((doc) => console.log(doc))
            .catch((err) => console.log(err.message))
        message.success("Vous êtes bien inscrit");
        setLoading(false);
        // props.setActiveComponent(<Dashboard />);
      })
      .catch((err) => {
        setLoading(false);
        message.error("Impossible de vous inscrire");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
    <div>
      <Title>Create an user account <UserAddOutlined /></Title>
    </div>
    <Form
      name="basic"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {inputLabels.map((label) => createInputLabels(label))}

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

export default Profile;
