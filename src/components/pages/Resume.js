import React from "react";
import DylanResume from '../../Assets/dylan-resume-2022.pdf'

function Resume() {
    return (
        <embed src={DylanResume} type="application/pdf" width="100%" height="600px" style={{ marginTop: "10%", marginBottom: "10%"}} />
    )
}
export default Resume