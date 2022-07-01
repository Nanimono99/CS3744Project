function Content() {
    return (
        <div style={{textAlign:"center", backgroundColor:"lightgreen"}} >
            <div style={{paddingTop: "2.5vw"}}>
                <a href={"/project/1"}  style={{textDecoration: "none", color: "black"}}>
                    <b style={{fontSize: "2vw", paddingTop: "5vw"}}><h2>Homework 1</h2></b>
                </a>
                <div style={{height: "90px", display:"inline-grid", justifyContent:"center", alignItems:"center",
                    paddingLeft: "90px", paddingRight: "90px"}}>
                    <a href={"/project/1"} style={{textDecoration: "none", color: "black", fontSize: "2.5vw"}}>
                    In the first project, I explored APOD NASA API and how to fetch information. 
                    The main body is my first UI which consists of a single button that, 
                    when clicked, sends a request to APOD (Astronomy Picture of the Day)API by NASA. 
                    </a>
                </div >
                <a href={"/project/1"}>
                    <img style={{paddingTop: "5vw"}} src={require("./picture/Nasa.png")} width="40%" height="50%"
                         alt={"p2"}/>
                </a>
            </div>

            <div style={{paddingTop: "5vw"}}>
                <a href={"/project/2"}  style={{textDecoration: "none", color: "black"}}>
                    <b style={{fontSize: "2vw"}}><h2>Homework 2</h2></b>
                </a>
                <div style={{height: "90px", display:"inline-grid", justifyContent:"center", alignItems:"center",
                    paddingLeft: "90px", paddingRight: "90px", textDecoration: "none"}}>
                    <a href={"/project/2"} style={{textDecoration: "none", color: "black", fontSize: "2.5vw"}}>
                        The second project is about how to use CSS grid layout.For the odd numbers, the block's color is yellow;
                         for the even numbers, the block's color is green;
                          and for the prime numbers, the block's color is red with a solid black border.
                    </a>
                </div>
                <a href={"/project/2"}>
                    <img style={{paddingTop: "5vw"}} src={require("./picture/Grid.png")} width="40%" height="50%"
                         alt={"p2"}/>
                </a>
            </div>

            <div style={{paddingTop: "5vw"}}>
                <a href={"/project/3"}  style={{textDecoration: "none", color: "black"}}>
                    <b style={{fontSize: "2vw"}}><h2>Homework 3</h2></b>
                </a>
                <div style={{height: "90px", display:"inline-grid", justifyContent:"center", alignItems:"center",
                    paddingLeft: "90px", paddingRight: "90px", textDecoration: "none"}}>
                    <a href={"/project/3"} style={{textDecoration: "none", color: "black", fontSize: "2.5vw"}}>
                        The third project is about how to use P5. The content is build all by my own idea.
                         When your mouse clicked, the bugs will appear where your mouse is with random size.
                    </a>
                </div>
                <a href={"/project/3"}>
                    <img style={{paddingTop: "5vw"}} src={require("./picture/P5.png")} width="40%" height="50%"
                         alt={"p3"}/>
                </a>
            </div>

            <div style={{paddingTop: "5vw"}}>
                <a href={"/project/4"}  style={{textDecoration: "none", color: "black"}}>
                    <b style={{fontSize: "2vw"}}><h2>Homework 4</h2></b>
                </a>
                <div style={{height: "90px", display:"inline-grid", justifyContent:"center", alignItems:"center",
                    paddingLeft: "90px", paddingRight: "90px", textDecoration: "none"}}>
                    <a href={"/project/4"} style={{textDecoration: "none", color: "black", fontSize: "2.5vw"}}>
                        The Fourth project is about how to use D3. We explored how to build chart by using D3, and how to use external data 
                        to build chart or graph.
                
                    </a>
                </div>
                <a href={"/project/4"}>
                    <img style={{paddingTop: "5vw", paddingBottom: "5vw"}} src={require("./picture/P5.png")} width="40%" height="50%"
                         alt={"p3"}/>
                </a>
            </div>
        </div>
    );
}

function Project() {
    return (
        <div style={{paddingTop: "20px", textAlign: "center", fontFamily: "Times New Roman, Times, serif"}}>
            <Content/>
        </div>
    )
}
export default Project;