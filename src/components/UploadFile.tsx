import '../css/UploadFile.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import axios from 'axios'
import { useState } from 'react';

const Input = styled('input')({
  display: 'none',
});

function UploadFile() {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = useState<any>();
  const nodeFileSend = 'services/m/filesend'

  async function upload(event: any) {
    event.preventDefault()
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    let payload = {
      data: formData,
      filepath: selectedFile,
      csvFileContent: selectedFile,
      headers: { "Content-Type": "multipart/form-data" }
    }

    try {
      axios.post(nodeFileSend, payload).then((response) => {
        const object = response.data
        console.log(object)
      })
    } catch (error) {
      console.log(error)
    }

  }

  async function handleFileSelect(event: any) {
    await setSelectedFile(event.target.files[0])
    console.log(`Selected file - ${selectedFile}`)
  }

  return (
    <div className="UploadFile">
      <br />
      <div className='Upload-body'>
        <label htmlFor="contained-button-file">
          <form onSubmit={upload}>
            <Input id="contained-button-file" multiple type="file" onChange={handleFileSelect} />
            <Button variant="contained" component="span">
              Select File
            </Button>
            <br></br>
                {/* PARSE OBJECT FILE VVVVV */}
            <h4>{`File to upload:${selectedFile}`}</h4>
            <button className='button' type='submit'>Submit</button>
          </form>
        </label>
      </div>
    </div>
  );

}

export default UploadFile;
