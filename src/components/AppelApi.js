import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.min.css";
import Temperature from "./Temperature";
import { Row, Col, Card, Typography } from "antd";
import "../styles/AppelApi.css"
import InfosCountry from "./InfosCountry";
import paris from '../assets/Paris.jpg'

function AppelApi() {
  const [data, setData] = useState([]);
  const { Meta } = Card;
  const {Title} = Typography;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://restcountries.com/v3.1/subregion/europe");
      setData(result.data);
      console.log(result.data);
    };
    fetchData();
  }, []);


  return (
    <Fragment>
    <div>
    <Title align="center">Wanting to travel in Europe ?</Title>
    </div>
      <div align="center">
      <Row gutter={[32, 32]}>
      {data.map((item) => (
          <Col span={8} key={item.name.common}>
             <Card
                hoverable
                style={{ width: 400 }}
                cover={<img alt="example" src={paris} />}>
              
                <Meta title={item.flag + " " + item.name.common} description={item.capital} />
                <br/>
                <Temperature cityProps= {item.capital}/>

                <InfosCountry country={item.name.common} capital={item.capital} population={item.population} currencies= {item.currencies} />
            </Card>
        </Col>

      ))}
        
        </Row>
    </div>
      
      
    </Fragment>
  );
}

export default AppelApi;
