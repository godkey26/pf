// D3.js 코드
const data = [
  { label: "2015 - 2017", start: 0, end: 25, color: "#007bff" },
  { label: "2018 - 2020", start: 25, end: 50, color: "#00bfff" },
  { label: "2021 - 2022", start: 50, end: 75, color: "#007bff" },
  { label: "2023 - 현재", start: 75, end: 100, color: "#00bfff" },
];

const svg = d3.select("body")
  .append("svg")
  .attr("width", "100%")
  .attr("height", 100);

svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", d => `${d.start}%`)
  .attr("y", 30)
  .attr("width", d => `${d.end - d.start}%`)
  .attr("height", 40)
  .attr("fill", d => d.color)
  .on("mouseover", function () {
    d3.select(this).attr("fill", "#ff5733");
  })
  .on("mouseout", function (d) {
    d3.select(this).attr("fill", d.color);
  });

svg.selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .attr("x", d => `${(d.start + d.end) / 2}%`)
  .attr("y", 70)
  .attr("text-anchor", "middle")
  .attr("fill", "#fff")
  .text(d => d.label);
