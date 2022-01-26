import { useEffect, useState } from "react";

const useTOC = (contentID: string, TOCID: string, TOCActiveClassName: string) => {
    const content = document.getElementById(contentID);
    const TOC = document.getElementById(TOCID);
    const titles = content?.querySelectorAll('h1');
    const TOCTitles = TOC?.querySelectorAll('li > p');
    const [index, setIndex] = useState<number>();
    

    const observer = new IntersectionObserver((entries) => {
        let idxs = entries.filter(entry => entry.isIntersecting).map((_, index) => index);
        if (idxs.length > 0) setIndex(Math.max(...idxs));
    }, {
        
    })

    useEffect(() => {
        console.log(index);

    }, [index])

    useEffect(() => {
        titles?.forEach(title => {
            observer.observe(title);
        })
    }, [titles]);

    useEffect(() => {
        if (index) TOCTitles?.forEach((title, titleIndex) => {
            if (titleIndex === index) {
                title.classList.add(TOCActiveClassName);
            } else {
                title.classList.remove(TOCActiveClassName);
            }
        })
    }, [index])
}

export default useTOC;