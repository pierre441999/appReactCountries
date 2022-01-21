import "../styles/App.css";
import "antd/dist/antd.css";
import { Layout, Row, Col} from "antd";
import { useState } from "react";
import AppelApi from "./AppelApi";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Inscription from "../pages/Inscription";





function App() {
  
  const [activeComponent] = useState();
 
  return (
    <div>
    
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/inscription" element={<Inscription/>} />
        <Route exact path="/travel" element={<AppelApi />} />
        <Route exact path="*"element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
      <Layout>
      <Layout.Content>

      <Col offset={2} span={20}>
          <Row justify="center">{activeComponent}</Row>
        </Col>
      </Layout.Content>
      </Layout>
    
    </div>

    

  );
}

export default App;
