import { useState } from "react";
import Table from "../components/Table";
import UploadForm from "../components/UploadForm";

function Mark8() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  return (
    <div className="">
      <UploadForm setData={setData}/>
      <Table data={data}/>
    </div>
  );
}

export default Mark8;
