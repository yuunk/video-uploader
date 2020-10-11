import React, { Component } from 'react';
import './UploadForm.scss';
import axios from 'axios';

class UploadForm extends Component {
    state = {
        fileSelected: true,
    }

    toggleBtnDisabled = () => {
        if (this.state.fileSelected) {
            this.setState({ fileSelected: false });
        } else {
            this.setState({ fileSelected: true });
        }
    }

    submit = () => {

        let fileInputValue = this.fileInput;

        console.log(fileInputValue.files[0]);
        let formData = new FormData();
        formData.append('video', fileInputValue.files[0]);

        axios
            .post('/upload.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                console.log(response.data);
            })
            .catch(() => {
                console.log('axios faild');
            });    
    }



    render() {

        return (
            <div className="Form">
                <div>
                    <p>upload file.</p>
                </div>
                <div>
                    <input
                        type="file"
                        onChange={this.toggleBtnDisabled}
                        accept=".mp4, .mov, .jpeg"
                        ref={input => this.fileInput = input}
                        name="video"
                    />
                </div>
                <div>
                    <button
                        onClick={this.submit}
                        disabled={this.state.fileSelected}>UPLOAD</button>
                </div>
            </div>
        );
    }

}


export default UploadForm;