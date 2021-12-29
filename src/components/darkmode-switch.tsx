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
            className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                        pointer-events-none
                        inline-block
                        h-[34px] w-[34px]
                        rounded-full
                        bg-white
                        shadow-lg
                        transform ring-0 transition ease-in-out duration-200`}
        />
    </Switch>
}