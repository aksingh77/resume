// import About from "../main/about/About";
// import Contact from "../main/contact/Contact";
// import Dashboard from "../main/dashboard/Dashboard";
import Home from "../main/home/Home";
import Layout from "../main/Layout";
import Resume from "../main/resume/Resume";

const pageRoute = [
    {
        path: '/',
        element: <Layout />,
        children: [{
            path: '',
            element: <Home />
        },
        {
            path: '/resume',
            element: <Resume />
        }
        ]
    }
]
export default pageRoute;