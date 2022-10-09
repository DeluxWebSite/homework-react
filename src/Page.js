import React, { useContext } from "react";
import { ThemeContext } from "./Context";

const Page = () => {
    const theme = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            Page
        </div>
    )
}

export default Page;