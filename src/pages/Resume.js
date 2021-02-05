import React from 'react'

export default function Resume() {
    return (
        <div className="row d-flex justify-content-center mt-5">
            <div>
                <a href={window.location.origin + "/resume.pdf"} download>
                    <img src={window.location.origin + "/images/resumeimg.png"} />
                    <br />
                    click to download
                </a>
            </div>
        </div >
    )
}
