import { useEffect, useState } from 'react';

export const useUtterances = () => {
    const [dark, setDark] = useState(false);

    const commentNodeId = `github-comments`;

    useEffect(() => {
        const handle = () => {
            console.log('fuck');

            const isDark = 'darkMode' in localStorage && localStorage.darkMode === 'true'
            setDark(isDark)
        }
        window.addEventListener('storage', handle)
        return () => {
            window.removeEventListener('storage', handle)
        }
    }, [])

    useEffect(() => {
        const scriptParentNode = document.getElementById(commentNodeId);
        if (!scriptParentNode) return;
        // docs - https://utteranc.es/
        const script = document.createElement('script');
        script.src = 'https://utteranc.es/client.js';
        script.async = true;
        script.setAttribute('repo', "observerw/oldspaper");
        script.setAttribute('issue-term', 'pathname');
        script.setAttribute('label', 'comment :speech_balloon:');
        script.setAttribute('theme', dark ? 'github-dark' : 'github-light');
        script.setAttribute('crossorigin', 'anonymous');

        scriptParentNode.appendChild(script);

        return () => {
            // cleanup - remove the older script with previous theme
            if (scriptParentNode.firstChild)
                scriptParentNode.removeChild(scriptParentNode.firstChild);
        };
    }, [commentNodeId, dark]);

    return commentNodeId;
};