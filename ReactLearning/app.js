// using Js
// const root = document.getElementById("root");
//     const heading = document.createElement("h1");
//     heading.innerHTML = "Hello World from Js!!";
//     root.appendChild(heading);


//using react
// React.createElement("<tag>",{<attributes>eg id : className}, [child11,child2])
const heading = React.createElement("div",{id :"parent"},
[
    React.createElement("div",{id :"child1"},React.createElement("h1",{},"Hello from Child1")),
    React.createElement("div",{id :"child2"},React.createElement("h1",{},"Hello from Child2"))
]
);
    console.log(heading);
    const root=ReactDOM.createRoot(document.getElementById("root"));
    console.log(root);
    root.render(heading);