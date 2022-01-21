import "antd/dist/antd.css";
import { Layout, Row, Col} from "antd";
import { useState, useEffect } from "react";
import Profile from "../components/Profile";
import Navigation from "../components/Navigation";

const Inscription = () => {
    const [activeComponent, setActiveComponent] = useState();
    useEffect(() => {    
        setActiveComponent(<Profile setActiveComponent={setActiveComponent}/>);
        },[setActiveComponent])
    return (
        <div>
        <Navigation/>
        <Layout>
        <Layout.Content>
        <Col>
          <Row justify="center">{activeComponent}</Row>
        </Col>
        </Layout.Content>
         </Layout>
        </div>
    );
};

export default Inscription;