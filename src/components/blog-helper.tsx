import React from "react";




export default () => {
    return <div className="fixed right-10 bottom-10 flex flex-row justify-between">
        <button className="transparent-block w-10 p-0 b-0" onClick={() => { window.scrollTo(0, 0) }}>
            <svg className="w-full fill-current text-gray-400 dark:text-gray-200 rounded-md" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3414"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m5.333333 232.085334L322.752 576l45.248 45.248 149.333333-149.333333 149.333334 149.333333L711.914667 576l-194.581334-194.581333z" p-id="3415"></path></svg>
        </button>
    </div>
}