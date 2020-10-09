import React from 'react';
import './UploadForm.scss';

const uploadForm = () => {
    return (
        <form method="post" className="UploadForm">
            <p>upload file.</p>
            <input type="file" accept=".mp4, .mov" />

            <button type="submit">Upload</button>
        </form>
    );
}

export default uploadForm;