import React, { Component, useState } from 'react';
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

    hoge = () => {

        // const [posts, setPosts] = useState([]);

        axios
            .get('/hoge.php')
            .then(response => {
                console.log(response.data);
            })
            .catch(() => {
                console.log('axios faild');
            });    
    }



    render() {


        return (
            // <form method="post" className="UploadForm" >
            <div>
                <div>
                    <p>upload file.</p>
                </div>
                <div>
                    <input onChange={this.toggleBtnDisabled} type="file" accept=".mp4, .mov" />
                </div>
                <div>
                    <button onClick={this.hoge} type="submit" disabled={this.state.fileSelected}>UPLOAD</button>
                </div>
            </div>

            // </form>
        );
    }


}


export default UploadForm;