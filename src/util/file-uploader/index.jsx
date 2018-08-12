import React from 'react';
//
import FileUpload from './react-fileupload.jsx';

class FileUploader extends React.Component {
    render() {
        const options = {
            baseUrl: '/manage/product/upload.do',
            fileFieldName: 'upload_file',   // read the document
            dataType: 'json',
            chooseAndUpload: true,
            uploadSuccess: (res) => this.props.onSuccess(res.data),
            uploadError: (err) => this.props.onError(err.message),
        }

        return (
            <FileUpload options={options}>
                <button className="btn btn-xs btn-default" ref="chooseAndUpload">choose</button>
                {/* <button ref="uploadBtn">upload</button> */}
            </FileUpload>
        );

    }
}

export default FileUploader;