import  React, { useCallback } from 'react'
import Picture from '../images/filepic.png'
import {useDropzone} from 'react-dropzone'



const Dragndrop = () => {

   const onDrop = useCallback((acceptedFiles: any) => {console.log(acceptedFiles)
  }, []);

    const {getRootProps, getInputProps} = useDropzone({
      onDrop,
      multiple: false, 
    });
  return (
    <div className = "flex flex-col items-center justify-center h-full space-y-3 border-2 border-dashed">
    <div {...getRootProps()} className = "w-full h-80 rounded-md cursor-pointer focus:outline-none">
        <input{...getInputProps()}/>
        <p>
        <img src={Picture} alt=""/>
        </p>
    </div>
    </div>
  )
}

export default Dragndrop