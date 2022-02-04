// import { Link, useLocation } from 'react-router-dom';
// import React, { useState } from 'react';
// import iitg from '../Pages/iitg.png';




// function Nav() {
//     const location = useLocation();


//     const [expanded, setExpand] = useState(
//         location.pathname.includes(headerToPath)
//       );
    
//       const onExpandChange = e => {
//         e.preventDefault();
//         setExpand(expanded => !expanded);
//       };


//     return (
//         <div className='bg-blue-500 w-80 h-screen' >
//             <img className='ml-16 pt-8' src={iitg} alt="" />
//             <div className='px-16 pt-4'>
//                 <ul className=''>

//                     <li className='py-2 mb-1 w-60 px-6 hover:bg-red-400 rounded-full'>
//                         <Link to='/'>
//                             <p>Home</p>
//                         </Link>
//                     </li>
//                     <ul className='py-2 mb-1 w-60 px-6 hover:bg-red-400 rounded-full'>
//                         <li onClick={() => setview("true")}>
//                             <Link to='/events'>
//                                 <p>events {view}</p>
//                             </Link>
//                         </li>
//                         {this.setview.length>0 && <ul>Hello</ul>}
//                     </ul>
//                     <li className='py-2 mb-1 w-60 px-6 hover:bg-red-400 rounded-full'>
//                         <Link to='/others'>
//                             <p>others</p>
//                         </Link>
//                     </li>


//                     <li className='py-2 mb-1 w-60 px-6 hover:bg-red-400 rounded-full'>
//                         <Link to='/clubs'>
//                             <p>clubs</p>
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default Nav;



