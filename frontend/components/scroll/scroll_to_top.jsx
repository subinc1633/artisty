import { useEffect } from "react"
import { useHistory } from "react-router"

const ScrollToTop = () => {
    const history = useHistory();

    useEffect(() => {
        const removeScroll = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => removeScroll();
    }, []);

    return null;
}

export default ScrollToTop;