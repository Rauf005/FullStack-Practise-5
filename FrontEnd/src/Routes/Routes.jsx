import UserRoot from "../Pages/UserRoot";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import NoteFound from "../Pages/NoteFound/NoteFound";
import Add from "../Pages/Add/Add";



const Routes=[
    {
        path:"/",
        element:<UserRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/add",
                element:<Add/>
            },
            {
                path:"/favorites",
                element:<Favorites/>
            },
            {
                path:"*",
                element:<NoteFound/>
            },
        ]

    }
]
export default Routes