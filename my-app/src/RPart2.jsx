
// LayOuts : - 

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);








// // 9. Lists and Keys🪻

// import React from 'react';

// const ItemList = ({ items }) => {
//     return (
//         <ul>
//             {items.map(item => (
//                 <li key={item.id}>{item.name}</li>
//             ))}
//         </ul>
//     );
// };

// const App = () => {
//     const items = [
//         { id: 1, name: 'Item 1' },
//         { id: 2, name: 'Item 2' },
//         { id: 3, name: 'Item 3' },
//     ];

//     return <ItemList items={items} />;
// };
    
// export default App
                        




                            // children🏵️

// import { useEffect , useState } from "react";

// function App () {
//     // const [showTimer, setShowTimer] = useState(true);

// //     return <div>
// //  <Card innerContent = {"hi thereeeee"} />
// //     </div>

// return <div style={{display: "flex"}}>

// <Card>
//     <div style={{color : "white"}}>
//     Leave a message for Khushiii <br /> <br />

//     <input type="text" />

//     </div>
// </Card>

// <Card>
//     Helllooooo!!!!
// </Card>


// </div>


// }

// function Card ({children}) {
//     return <div style={{background : "black" , borderRadius: 10, color: "white", padding : 10 , margin : 20 }}>
//         {children}
//     </div>
// }

// export default App 


// ---------------------------------------------------------------



// import React from 'react';

// const Card = ({ children }) => {
//     return (
//         <div style={{
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             padding: '20px',
//             margin: '10px',
//             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
//         }}>
//             {children}
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div>
//             <Card>
//                 <h2>Card Title</h2>
//                 <p>This is some content inside the card.</p>
//             </Card>
//             <Card>
//                 <h2>Another Card</h2>
//                 <p>This card has different content!</p>
//             </Card>
//         </div>
//     );
// };

// export default App;
