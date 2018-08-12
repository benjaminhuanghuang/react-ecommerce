import React from 'react';
//
import FileUpload from 'react-fileupload';

class FileUploader extends React.Component {
    render() {
        const options = {
            baseUrl: 'manage/product/upload.do',
            fileFieldName: 'upload_file',   // read the document
            dataType : 'json',
            uploadSuccess: () =>{},
            uploadSuccess: () =>{},
            
            param: {}
        }

        return (
            <FileUpload options={options}>
                <button ref="chooseBtn"></button>
                <button ref="uploadBtn"></button>
            </FileUpload>  
        );

    }
}

export default FileUploader;