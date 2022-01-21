import "antd/dist/antd.css";
import { Layout, Row, Col} from "antd";
import Login from "../components/Login";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";

const Home = (props) => {
    const [activeComponent, setActiveComponent] = useState();
    useEffect(() => {    
    setActiveComponent(<Login setActiveComponent={setActiveComponent}/>);
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

export default Home;