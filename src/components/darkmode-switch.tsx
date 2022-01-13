import { Switch } from '@headlessui/react';
import React, { useEffect, useState } from 'react';

export default () => {
    const [enabled, setEnabled] = useState(false)

    useEffect(() => {
        if ('darkMode' in localStorage && localStorage.darkMode === 'true') {
            setEnabled(true);
            document.documentElement.classList.add('dark')
        } else {
            setEnabled(false);
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const handleSwitch = (checked: boolean) => {
        setEnabled(checked);
        localStorage.darkMode = checked.toString();
        if (checked) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    return <Switch
        checked={enabled}
        onChange={handleSwitch}
        className={`${enabled ? 'bg-blue-500' : 'bg-blue-300'}
                    relative 
                    inline-flex flex-shrink-0 
                    h-[38px] w-[74px] 
                    border-2 border-transparent
                    rounded-full 
                    cursor-pointer transition-colors 
                    ease-in-out duration-200 
                    focus:outline-none focus-visible:ring-2
                  focus-visible:ring-white focus-visible:ring-opacity-75 
                    shadow-lg`}
    >
        <span className="sr-only">Use setting</span>
        <span
            aria-hidden="true"
            className={`${enabled ? 'translate-x-[36px]' : 'translate-x-0'}
                        pointer-events-none
                        inline-block
                        h-[34px] w-[34px]
                        rounded-full
                        bg-white
                        shadow-lg
                        transform ring-0 transition ease-in-out duration-200`}
        >
            {enabled ?
                <svg className="w-full fill-current text-slate-300" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1225"><path d="M524.8 938.666667h-4.266667a439.893333 439.893333 0 0 1-313.173333-134.4 446.293333 446.293333 0 0 1-11.093333-597.333334 432.213333 432.213333 0 0 1 170.666666-116.906666 42.666667 42.666667 0 0 1 45.226667 9.386666 42.666667 42.666667 0 0 1 10.24 42.666667 358.4 358.4 0 0 0 82.773333 375.893333 361.386667 361.386667 0 0 0 376.746667 82.773334 42.666667 42.666667 0 0 1 54.186667 55.04A433.493333 433.493333 0 0 1 836.266667 810.666667a438.613333 438.613333 0 0 1-311.466667 128z" p-id="1226"></path></svg>
                :
                <svg className="w-full fill-current text-slate-300" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1243"><path d="M512 256a42.666667 42.666667 0 0 0 42.666667-42.666667V128a42.666667 42.666667 0 0 0-85.333334 0v85.333333a42.666667 42.666667 0 0 0 42.666667 42.666667zM896 469.333333h-85.333333a42.666667 42.666667 0 0 0 0 85.333334h85.333333a42.666667 42.666667 0 0 0 0-85.333334zM256 512a42.666667 42.666667 0 0 0-42.666667-42.666667H128a42.666667 42.666667 0 0 0 0 85.333334h85.333333a42.666667 42.666667 0 0 0 42.666667-42.666667zM265.386667 213.333333a42.666667 42.666667 0 0 0-59.306667 62.72l61.44 59.306667a42.666667 42.666667 0 0 0 31.146667 11.946667 42.666667 42.666667 0 0 0 30.72-13.226667 42.666667 42.666667 0 0 0 0-60.16zM725.333333 347.306667a42.666667 42.666667 0 0 0 29.44-11.946667l61.44-59.306667A42.666667 42.666667 0 0 0 758.613333 213.333333l-61.44 60.586667a42.666667 42.666667 0 0 0 0 60.16 42.666667 42.666667 0 0 0 28.16 13.226667zM512 768a42.666667 42.666667 0 0 0-42.666667 42.666667v85.333333a42.666667 42.666667 0 0 0 85.333334 0v-85.333333a42.666667 42.666667 0 0 0-42.666667-42.666667zM756.48 688.64a42.666667 42.666667 0 0 0-59.306667 61.44L758.613333 810.666667a42.666667 42.666667 0 0 0 29.44 11.946666 42.666667 42.666667 0 0 0 30.72-12.8 42.666667 42.666667 0 0 0 0-60.586666zM267.52 688.64l-61.44 59.306667a42.666667 42.666667 0 0 0 0 60.586666 42.666667 42.666667 0 0 0 30.72 12.8 42.666667 42.666667 0 0 0 28.586667-10.666666l61.44-59.306667a42.666667 42.666667 0 0 0-59.306667-61.44zM512 341.333333a170.666667 170.666667 0 1 0 170.666667 170.666667 170.666667 170.666667 0 0 0-170.666667-170.666667z" p-id="1244"></path></svg>
            }

        </span>
    </Switch>
}