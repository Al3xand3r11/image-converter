import  React from 'react'
import Picture from '../images/filepic.png'
import {useDropzone} from 'react-dropzone'


const Dragndrop = () => {
    const {getRootProps, getInputProps} = useDropzone({});
  return (
    <div>
    <div {...getRootProps()} className = "test">
        <input{...getInputProps()}/>
        <p>
        <img src={Picture} alt=""/>
        </p>
    </div>
    </div>
  )
}

export default Dragndrop