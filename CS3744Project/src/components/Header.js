import {Link} from "react-router-dom";

export default function Header(){
    return(
        <div style={{backgroundColor:"greenyellow", padding:'1%'}}>
            <h1 >Header</h1>
            <nav>
                <Link to="/">Main</Link> |{" "}
                <Link to="/project">Homeworks</Link>
            </nav>
            

        </div>
    )
}
