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
        title: "分类",
        to: "",
        description: "",
    },
    {
        title: "最近",
        to: "",
        description: "",
    },
    {
        title: "Tab 2",
        to: "",
        description: "",
    },
    {
        title: "Tab 2",
        to: "",
        description: "",
    },
    {
        title: "Tab 2",
        to: "",
        description: "",
    }
]

const Tabs = () => {
    return <div className="flex justify-between w-fit">
        {TabInfo.map((info) => {
            const { title, to, description } = info;
            return <Link to={to} className="border-b-4 px-2 py-1 rounded-sm border-blue-400/50  hover:bg-slate-500/20 mr-5">{title}</Link>
        })}
    </div>
}

export default () => {
    return <header className="flex-grow-0 sticky top-0 z-30 bg-opacity-30 bg-slate-100 dark:bg-slate-700 backdrop-filter backdrop-blur firefox:bg-opacity-90">
        <div className="max-w-8xl mx-auto xl:px-8">
            <div className="flex items-center justify-between px-4 py-2 lg:px-8 sm:px-6 xl:px-0">
                <DarkModeSwitch />
                <Tabs />
            </div>

        </div>
    </header>
}