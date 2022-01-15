import { Link } from "gatsby";
import React from "react";
import DarkModeSwitch from '../components/darkmode-switch';

interface ITabInfo {
    title: string,
    to: string,
    description?: string,
}

const TabInfo: ITabInfo[] = [
    {
        title: "首页",
        to: "/",
        description: "",
    },
    {
        title: "分类",
        to: "/category",
        description: "",
    },
    {
        title: "最近",
        to: "/",
        description: "",
    },
    {
        title: "归档",
        to: "/",
        description: "",
    },
]

const Tabs = () => {
    return <div className="flex justify-between w-fit">
        {TabInfo.map((info) => {
            const { title, to, description } = info;
            return <Link
                to={to} key={title}
                className="transparent-block px-2 py-1 border-b-4 mr-5 border-blue-400/50">
                {title}
            </Link>
        })}
    </div>
}

export default () => {
    return <header className="flex-grow-0 
    fixed w-screen h-14 top-0 z-30 
    bg-opacity-40 bg-slate-200 dark:bg-slate-700 
    backdrop-filter backdrop-blur firefox:bg-opacity-90">
        <div className="max-w-8xl mx-auto xl:px-8">
            <div className="flex items-center justify-between 
                px-4 py-2 lg:px-8 sm:px-6 xl:px-0">
                <DarkModeSwitch />
                <Tabs />
            </div>

        </div>
    </header>
}