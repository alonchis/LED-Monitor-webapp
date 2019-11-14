// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
//
// var Circle = React.createClass({
//   render:function(){
//     var circleStyle = {
//       padding:10,
//       margin:20,
//       display:"inline-block",
//       backgroundColor: this.props.bgColor,
//       borderRadius: "50%",
//       width:100,
//       height:100,
//     };
//     return (
//         <div style={circleStyle}>
//         </div>
//     );
//   }
// });
// var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363",
//   "#85FFC7", "#297373", "#FF8552", "#A40E4C"];
//
// var renderData = [];
//
// for (var i = 0; i < colors.length; i++) {
//   var color = colors[i];
//   renderData.push(<Circle key={i + color} bgColor={color}/>);
// }
// var destination = document.querySelector("#container");
//
// ReactDOM.render(
//     <div>
//       {renderData}
//     </div>,
//     destination
// );
//
// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }
//
// //export default App;
