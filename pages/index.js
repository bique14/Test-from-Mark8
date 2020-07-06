import { useState } from "react";
import Table from '../components/Table'
import UploadForm from '../components/UploadForm'

function UseStateExample() {
  const [count, setCount] = useState(0);

  return (
    <div className="" >
      <UploadForm />
      <Table />
    </div>
  );
}

export default UseStateExample;