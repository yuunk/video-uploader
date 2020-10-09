import React, { Component } from 'react';
import './UploadForm.scss';

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

    render() {

        return (
            <form method="post" className="UploadForm" >
                <p>upload file.</p>
                <input onChange={this.toggleBtnDisabled} type="file" accept=".mp4, .mov" />

                <button type="submit" disabled={this.state.fileSelected}>UPLOAD</button>
            </form>
        );
    }


}


export default UploadForm;