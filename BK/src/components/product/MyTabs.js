import Language from './Language'
import MyCard from './MyCard';
import { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Products () {
  const [productType, setProductType] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  useEffect(() =>{
    fetch("http://localhost:8080/api/productType/getAll")
    .then((res) => res.json())
    .then((result) => {
      setProductType(result);
    });
  }, []);
  // console.log(productType);
  return (
    <Tabs
        defaultActiveKey="1"
        id="justify-tab-example"
        className="mb-3"
        justify
    >
        {productType.map((val) => (
            <Tab eventKey={val.type_id} title={val.type_desc}>
                <div>
            <Language setSelectedLanguage={setSelectedLanguage} />
            <MyCard typeId={val.type_id} selectedLanguage={selectedLanguage} />
          </div>
            </Tab>
        ))}
    </Tabs>
    
);
}