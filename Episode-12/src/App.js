import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import ResturantMenu from './components/ResturantMenu';
// import Grocery from './components/Grocery';
import UserContext from './components/UserContext';
import {Provider} from "react-redux"; 
import appStore from './utils/appStore';
import Cart from './components/Cart';


// Chunking
// Code Spliting
// Dynamic Bundling
// Lazy Loading
// on demand loading
const Grocery = lazy(() => import("./components/Grocery"));


const  AppLayout = () =>{
    const [userName, setUserName] = useState();

// fake auth -  storing the username
useEffect(()=>{
    const data = {
        userName: "Ranjan"
    };
    setUserName(data.userName);
},[]);
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName, setUserName}}> {/* we can passing setUserName function to context */}
        <div className='app'>
            <Header />
           <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([  
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/cart",
                element:<Cart />
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>Loading</h1>}>
                    <Grocery />
                    </Suspense>
            },
            {
                path:"/resturants/:resId",
                element:<ResturantMenu />
            }
        ],
        errorElement: <Error />
    }
])




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);