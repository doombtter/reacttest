import { Link } from "react-router-dom";

const PageButton = (path) => {
    return(
        <Link to={path.path}>이동</Link>
    )
}

export default PageButton