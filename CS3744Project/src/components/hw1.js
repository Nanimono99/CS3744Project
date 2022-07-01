import { Component } from "react";
import {Link} from "react-router-dom";
function Tab() {
    return (
        <div style={{fontFamily: "Times New Roman, Times, serif", paddingTop: "5%",
            paddingBottom: "3%", fontSize: "2vw"}}>
            <nav>
                <Link to={"/project/1"}>Nasa Project</Link> {"| "}
                <Link to={"/project/2"}>GridFunction</Link> {"| "}
                <Link to={"/project/3"}>P5 Project</Link> {"| "}
                <Link to={"/project/4"}>D3 Project</Link> 
            </nav>
        </div>
    );
}


export default class NasaClass extends Component {
    constructor(props) {
        super(props);

        this.state = {description: "", url: ""}
    }

    updateState = (desc, url) => {
        this.setState({description: desc, url: url})
    }

    getImage = () => {
        const api = "MZwupgqfb2TSs5fb582TMbtyLSfhqy5CBiJRdzGB"
        const url = `https://api.nasa.gov/planetary/apod?api_key=${api}`
        fetch(url).then(response => response.json())
            .then(data => this.updateState(data.explanation, data.url))
    }

    render() {
        return(
            <div style={{textAlign:"center", backgroundColor:"lightpink"}} >
                <Tab/>
                <h1>Nasa Project</h1>
                <button style={{marginTop: "5px"}} onClick={this.getImage}>Get Image</button >
                <div>
                    <img style={{paddingTop: "10px"}} width="30%" height="30%" src={this.state.url} alt={'Nasa apod api'}/>
                </div>
                <section width="70%" height="70%" style={{display:"flex", alignItems:"flex-between", padding:"3%"}}>
                    <p>{this.state.description}</p>
                </section>
            </div>
        )
    }
}
