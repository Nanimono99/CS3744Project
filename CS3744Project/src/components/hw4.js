import * as d3 from "d3"
import React, {Component} from "react";
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

class YahooFinance extends Component {
    constructor(props) {
        super(props);
        this.background = 'lightblack';
        this.myRef = React.createRef();
        this.margin = {top:40, right: 40, bottom: 40, left: 70}
        this.pxX = 660 - this.margin.left - this.margin.right
        this.pxY = 330 - this.margin.top - this.margin.bottom
        this.container = undefined;
        // get values
        this.date = []
    }

    initiate = () => {
        let root = this.myRef.current;
        this.container = d3.select(root).append('svg')
            .attr('width', 600 + this.margin.left + this.margin.right)
            .attr('height', +300 + this.margin.top + this.margin.bottom)
            .style('background', 
            this.background)
            .append('g')
            .attr('transform', `translate(${this.margin.left} ${this.margin.top + 30})`)

        let { result } = this.props.data.chart
        let { timestamp, comparisons } = result[0]

        timestamp.forEach(data => {
            this.date.push(new Date(data * 1000))
        }
        )
        this.date.unshift(new Date(this.date[0].getTime() - (24 * 60 * 700 * 1000)))
        this.date.push(new Date(this.date[this.date.length - 1]
                 .getTime() + (24 * 60 * 100 * 1000)))


        // Set scaling for time
        let scX = d3.scaleTime()
                    .domain([this.date[0], this.date[this.date.length - 1]])
                    .range([0, this.pxX])

        let [minVal, maxVal] = [Infinity, -Infinity]
        comparisons.forEach(tick => {
            tick.high.forEach(val => {
                    maxVal = Math.max(maxVal, val)
                    minVal = Math.min(minVal, val)
                }
            )
        })
        let scY = d3.scaleLinear()
                    .domain([0, maxVal + (3000 - maxVal)])
                    .range([this.pxY, 0])
        let color = ['red', 'blue', 'yellow', 'green']
        

        // generating circles for each value in high
        comparisons.forEach((tick, idx) => {
            let { high, symbol } = tick
            let g = this.container
                .append("g")
            g.selectAll('circle')
                .data(high)
                .enter()
            for (let i = 1; i < high.length; i++) {
                g.append('circle')
                    .attr('cx', scX(this.date[i]))
                    .attr('cy', scY(high[i]))
                    .attr('r', 3)
                    .attr('fill', color[idx])
                    .attr('opacity', 1)
            }

            // generating lines for each value in high
            for (let i = 2; i < high.length; i++) {
                g.append('line')
                    .attr('x1', scX(this.date[i]))
                    .attr('y1', scY(high[i]))
                    .attr('x2', scX(this.date[i - 1]))
                    .attr('y2', scY(high[i - 1]))
                    .attr('stroke', color[idx])
                    .attr('stroke-width', 1.5)
                    .attr('opacity', 1)
            }
            // our tooltip
            let toolTip = this.container.append('text')
            g.selectAll('circle')
                .on('mouseover', function (e) {
                    let [x, y] = d3.pointer(e, this)

                    let yVal = scY.invert(y)
                                  .toFixed(2);
                    toolTip.attr('x', x)
                        .attr('y', y)
                        .text(yVal)
                        .attr('fill', 'black')
                        .attr('font-size', '12px')
                        .attr('opacity', 1)
                })
                .on('mouseleave', function () {
                    setTimeout(() => {
                        toolTip.attr('opacity', 0)
                    }, 3000)
                })
            g.append('text')
                .attr('x', this.pxX + 20)
                .attr('y', 200 - idx * 30)
                .attr("fill", color[idx])
                .text(symbol)
        })
        // adding ticks and axis
        let axis = d3.axisRight(scY)
        this.container.append('g').call(axis)
        axis = d3.axisTop(scX)
        this.container.append('g')
            .attr('transform', `translate(0, ${this.pxY + 10})`)
            .call(axis)
            .selectAll('text')
            .attr('transform', 'rotate(90)translate(20, 0)')

        const xAxisGrid = d3.axisBottom(scX)
                            .tickSize(-this.pxX + 300)
                            .tickFormat('')
                            .ticks(10);
        this.container.append('g')
                      .attr('class', 'x, axis-grid')
                      .attr('transform', `translate(0, ${this.pxY})`)
                      .call(xAxisGrid)

        const yAxisGrid = d3.axisLeft(scY)
                            .tickSize(-this.pxY - 300)
                            .tickFormat('')
                            .ticks(10);
        this.container.append('g')
            .attr('class', 'y, axis-grid')
            .call(yAxisGrid)
    }

    componentDidMount() {
        this.initiate()
    }

    render() {
        return (
            <div style={{textAlign: "center", backgroundColor:"lightpink", padding:"3%"}}>
                <Tab/>
                <div ref={this.myRef}>
                </div>
            </div>

        )
    }
}

export default YahooFinance;