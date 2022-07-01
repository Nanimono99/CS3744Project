import { color } from "d3";

function MyMain() {
    return (
        <main style={{textAlign: "center", color:'blue'}}>
            <header style={{background:'lightpink', padding:"1%"}}>
                <img id="self" src={require("./picture/profile.jpg")} alt="placeHolder"
                style={{height: "200px", display:"inline-grid", justifyContent:"center", alignItems:"center",
                paddingLeft: "100px", paddingRight: "100px"}}/>
                <h1><strong>JinHeng Hu</strong></h1>

            </header>
            <div style={{background:'lightpink', padding:"1%"}}>
                                
            <h1>Contact-info</h1>
            <div style={{display:"flexbox", alignItems:"flex-between"}}>
            <div >
                    <h3>Email</h3>
                    <p>hjinheng@vt.edu</p>
                </div>
                <div>
                    <h3>Location</h3>
                    <p>Kunming, Yunnan, China</p>
                </div>
                <div>
                    <h3>Phone</h3>
                    <p>5407505604</p>
                </div>
                
                <div>
                    <h3>Instgram</h3>
                    <p>godknows14</p>
                </div>
            </div>
            </div>
        </main>
  );
}

export default MyMain;