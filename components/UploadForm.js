import { useState } from "react";

function UploadFormHeader() {
  return (
    <div className="border-b">
      <div className="p-4">
        <div className="text-xl flex flex-row">
          <h1 className="text-gray-900 font-bold">Bulk Upload form</h1>
          <span
            className="flex items-center justify-center text-xs rounded-full bg-blue-600 text-white px-1 ml-2"
            style={{ width: "1.25rem", height: "1.25rem", marginTop: "5px" }}
          >
            !
          </span>
        </div>
        <span className="text-xs text-blue-500">
          You haven't upload any bulk data yet
        </span>
      </div>
    </div>
  );
}

function UploadFormInput() {
  const [fileName, setFileName] = useState("");

  return (
    <div className="p-4">
      <div className="text-xl flex flex-col">
        <h1 className="text-gray-900 font-bold">Choose your an input method</h1>
        <div className="flex border rounded p-4 mt-2">
          <label
            className="flex justify-center items-center bg-gray-200 rounded w-12 cursor-pointer"
            htmlFor="upload-file"
          >
            +
          </label>
          <div className="flex flex-col text-sm ml-4">
            <span className="font-bold">via CSV file</span>
            <span>{!!fileName ? fileName : "อัปเดตข้อมูลจากไฟล์ CSV" }</span>
            <input
              className="hidden"
              id="upload-file"
              type="file"
              accept=".csv"
              onChange={(event) => setFileName(event.target.files[0].name)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function UploadForm() {
  return (
    <div className="w-3/5 m-auto rounded bg-white border my-10">
      <UploadFormHeader />
      <UploadFormInput />
    </div>
  );
}

export default UploadForm;
