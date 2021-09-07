import React , { useCallback , useEffect , useState }from 'react'

const upperHeader = () => {
    const [y, setY] = useState(window.scrollY);
    const [isShow,setIsShow] = useState(false)
    //you can use ""isShow""" in your code that this variable returns true or false base on your scroll
    
    const handleNavigation = useCallback(
        (e) => {
        const window = e.currentTarget;
        if (y > window.scrollY) {
            setIsShow(false)
        } else if (y < window.scrollY) {
            setIsShow(true)
        }
        setY(window.scrollY);
    },
    [y]);

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
          window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);
    return(
        <div syle={{height:"2000px"}}>
        {/* when you scroll , you can see isShow variable changes into true and false in console*/}
        </div>
    )
}
