import { color } from "d3";

function MyFooter() {
    return (
        <footer style={{  textAlign: "center", bottom: "0",
            width: "100%", position: "relative", fontFamily: "Times New Roman, Times, serif",
            fontSize: "1.5vw", margin:"0"
            , backgroundColor:"lightgray",
        }}>
           <h3 style={{backgroundColor:"lightgray", margin:0}}>&copy; Jinheng Hu 2022</h3>
        </footer>
    )
}

export default MyFooter;