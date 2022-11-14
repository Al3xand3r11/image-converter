import  React from 'react'

import {useDropzone} from 'react-dropzone'


const Dragndrop = () => {
    const {getRootProps, getInputProps} = useDropzone({});
  return (
    <div>
    <div {...getRootProps()} className = "test">
        <input{...getInputProps()}/>
        <p>Test</p>

    </div>
    </div>
  )
}

export default Dragndrop