// // src/App.jsx
// import { useState, useEffect } from 'react';

// const App = () => {
//   const [activeCard, setActiveCard] = useState(null);
//   const [stars, setStars] = useState([]);

//   // Create animated stars for background
//   useEffect(() => {
//     const newStars = Array.from({ length: 15 }, (_, i) => ({
//       id: i,
//       size: Math.random() * 3 + 1,
//       top: `${Math.random() * 100}%`,
//       left: `${Math.random() * 100}%`,
//       delay: Math.random() * 5
//     }));
//     setStars(newStars);
//   }, []);

//   const features = [
//     {
//       title: "Smooth Animations",
//       description: "Experience seamless transitions and interactive elements",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
//         </svg>
//       ),
//       color: "from-purple-500 to-indigo-600"
//     },
//     {
//       title: "Modern Design",
//       description: "Clean UI with gradient accents and glass morphism effects",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
//         </svg>
//       ),
//       color: "from-rose-500 to-pink-600"
//     },
//     {
//       title: "Responsive Layout",
//       description: "Fully adaptive design for all screen sizes",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
//         </svg>
//       ),
//       color: "from-amber-500 to-orange-500"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden relative p-4 md:p-8">
//       {/* Animated stars */}
//       {stars.map(star => (
//         <div
//           key={star.id}
//           className="absolute rounded-full bg-white animate-pulse"
//           style={{
//             top: star.top,
//             left: star.left,
//             width: `${star.size}px`,
//             height: `${star.size}px`,
//             animationDelay: `${star.delay}s`
//           }}
//         />
//       ))}

//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <header className="py-10 text-center animate-fade-in-down">
//           <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-3">
//             Stellar UI
//           </h1>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Beautifully animated components with Tailwind CSS
//           </p>
//         </header>

//         {/* Feature Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className={`relative bg-gradient-to-br ${feature.color} rounded-2xl overflow-hidden transition-all duration-500 transform-gpu ${
//                 activeCard === index 
//                   ? "scale-105 shadow-2xl z-10" 
//                   : "scale-95 hover:scale-100"
//               }`}
//               onMouseEnter={() => setActiveCard(index)}
//               onMouseLeave={() => setActiveCard(null)}
//             >
//               <div className="p-8 backdrop-blur-sm bg-black/20">
//                 <div className="mb-5 bg-white/10 p-4 rounded-full w-max backdrop-blur-md">
//                   {feature.icon}
//                 </div>
//                 <h2 className="text-2xl font-bold mb-3">{feature.title}</h2>
//                 <p className="text-gray-200">{feature.description}</p>
//               </div>
              
//               {/* Animated border */}
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 animate-rotate"></div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="py-20 text-center animate-fade-in-up animate-delay-500">
//           <div className="inline-block relative group">
//             <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-xl font-bold transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
//               Get Started
//             </button>
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10 animate-pulse"></div>
//           </div>
//           <p className="mt-6 text-gray-400">
//             Experience the future of UI design today
//           </p>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="py-8 text-center text-gray-500 border-t border-gray-800 mt-10">
//         <p>© 2023 Stellar UI. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Messages from './pages/Messages'
import MessageList from './components/MessageList'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import RootLayout from './RootLayout'
import Bookmarks from './pages/Bookmarks'
import Profile from './pages/Profile'
import SinglePost from './pages/SinglePost'
import Login from './pages/Login'
import Register from './pages/Register'
import Logout from './pages/Logout'
import { Provider } from 'react-redux'
import store from './stores/store'

const App = () => {

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, errorElement:<ErrorPage/>, children:[
    {index: true, element: <Home/>},
    {path: "messages", element: <MessageList/>},
    {path: "messages/:receiverId", element: <Messages />},
    {path: "bookmarks", element: <Bookmarks />},
    {path: "users/:id", element: <Profile />},
    {path: "posts/:id", element: <SinglePost />},
  ]},
  {path: "/login",element: <Login/>},
  {path: "/register",element: <Register/>},
  {path: "/logout",element: <Logout/>},
])




  return (
    <>
   <Provider store={store}><RouterProvider router={router} /></Provider>
   </>
  )
}

export default App