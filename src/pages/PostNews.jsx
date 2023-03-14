import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export const PostNews = () => {
    const [value, setValue] = useState('');
    return (
        <div classNameName='m-5' style={{ minHeight: "100vh", marginTop: "80px" }}>
            <div classNameName='p-4 py-5'>
                <div className='container my-2 d-flex justify-content-top align-items-center flex-column my-3' style={{ minHeight: "100vh" }}>
                    <div className='p-4' style={{ width: "600px" }}>
                        <h3 style={{ textAlign: "left", marginBottom: "20px" }}><span className='pageText'>Post News</span></h3>
                        <div>
                            <ReactQuill theme="snow" value={value} onChange={setValue} />
                            <div class=" " style={{ marginTop: "50vh", marginLeft: "" }}>
                                <input className='contactSubmitBtnInput' type="submit" value="Publish" style={{ backgroundColor: "black" }} onClick={()=>{toast("News Published 📢")}} />
                                <ToastContainer />    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
