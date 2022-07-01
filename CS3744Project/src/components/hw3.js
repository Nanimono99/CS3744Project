import {ReactP5Wrapper} from "react-p5-wrapper";
import {Link} from "react-router-dom";

function Tab() {
    return (
        <div style={{fontFamily: "Times New Roman, Times, serif", paddingTop: "20px",
            paddingBottom: "20px", fontSize: "2vw"}}>
            <nav>
                <Link to={"/project/1"}>Nasa Project</Link> {"| "}
                <Link to={"/project/2"}>GridFunction</Link> {"| "}
                <Link to={"/project/3"}>P5 Project</Link> {"| "}
                <Link to={"/project/4"}>D3 Project</Link>
            </nav>
        </div>
    );
}

// = .= This is the project 3
let bugs = [];
function sketch(p5) {
    let i;
    p5.setup = () => {
    p5.createCanvas(500, 500);

        p5.background('yellow');
    }

    p5.draw = () => {
        p5.background('yellow');
        p5.ellipse(p5.mouseX, p5.mouseY, 25, 25);

        for (i = 0; i < bugs.length; i++){
            bugs[i].move();
            bugs[i].display();
        }
    }

    p5.mousePressed = () => {
        bugs[i] = new Bug(p5.mouseX, p5.mouseY);
        bugs.push(bugs[i]);
    }

    class Bug {
        constructor(x,y){
            this.x = x;
            this.y = y;
            this.diameter = p5.random(10, 50);
            this.speed = 1;
        }

        move(){
            this.x += p5.random(-this.speed, this.speed);
            this.y += p5.random(-this.speed, this.speed);
        }

        display(){
            p5.ellipse(this.x, this.y, this.diameter, this.diameter)
        }
    }

}
function resetSketch(){
    bugs = new Array;
    console.log();
}
export function Bug() {
    return (
        <main style={{background:'lightpink', padding:"1%"}}>
            <div style={{textAlign: "center", fontFamily: "Times New Roman, Times, serif"}}>
            <div>
                <Tab/>
                <b>Click or move your mouse to Interact</b>
            </div>
            <div style={{paddingTop: "20px", textAlign: "center"}}>
                <ReactP5Wrapper sketch={sketch} >
                </ReactP5Wrapper>
            </div>
            <button onClick={resetSketch}>
                Reset
            </button>
        </div>
        </main>
    );
}
