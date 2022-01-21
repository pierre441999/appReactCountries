import React, {useState} from "react";
import { Modal, Button } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";


function InfosCountry({country, capital, population, currencies}) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    const numberFormat = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

return (

    <div>
        {/* <button onClick={showModal}>More infos</button> */}
        <Button type="secondary"  shape="round" onClick={showModal} icon={<InfoCircleOutlined />} size="large">
          More infos
        </Button>
      <Modal
              title={country}
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Capital: {capital}</p>
              <p>Population: {numberFormat(population)}</p>
              <p>Currencie: {Object.values(currencies).map((c) => c.name)}</p>

              <p>Symbol: {Object.values(currencies).map((c) => c.symbol)}</p>
            </Modal>
    </div>

    
)

}

export default InfosCountry;