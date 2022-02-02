import React from "react";

export default ({ rawDate, className }: { rawDate?: string, className?: string }) => {
    if (!rawDate) return <></>

    const date = new Date(rawDate);
    let dateStr = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
    return <span className={className}>
        {dateStr}
    </span>
}