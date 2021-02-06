import React from 'react'

export default function Resume() {
    return (
        <div className="row d-flex justify-content-center mt-5">
            <div>
                <a href={window.location.pathname + "/resume.pdf"} download>
                    <img src={window.location.pathname + "/images/resumeimg.png"} alt="resume" />
                    <br />
                    click to download
                </a>
            </div>
        </div >
    )
}
