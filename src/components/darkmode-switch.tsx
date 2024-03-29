import { Switch } from '@headlessui/react';
import React, { useEffect, useState } from 'react';

const setDocDarkMode = (darkMode: boolean) => {
    if (darkMode) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

export default () => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const isDarkMode = 'darkMode' in localStorage && localStorage.darkMode === 'true';
        setDarkMode(isDarkMode);
        setDocDarkMode(isDarkMode);
    }, [])

    const handleSwitch = (checked: boolean) => {
        setDarkMode(checked);
        setDocDarkMode(checked);
        localStorage.darkMode = checked.toString();
    }

    return <Switch
        checked={darkMode}
        onChange={handleSwitch}
        className={`h-[38px] w-[38px] flex justify-center items-center`}
    >
        {darkMode ?
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-current text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-current text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        }
    </Switch>
}