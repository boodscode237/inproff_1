import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Schedule from "./pages/Schedule/Schedule";
import Participate from "./pages/Participate/Participate";
import Login from "./pages/Login/Login";
import RootLayout from "./Layout/RootLayout";
import Organizers from "./pages/Organizers/Organizers";
import HelpLayout from "./Layout/HelpLayout";
import Faq from "./pages/Help/FAQ";
import FAQ from "./pages/Help/FAQ";
import ContactUs from "./pages/Help/ContactUs";
import NotFound from "./NotFound";
import ParticlesComponent from "./components/Particles/Particle/Particles";
import {AuthContextProvider} from "./context/AuthContext";
import LichnyKabinet from "./components/LichnyKabinet/ParticipantPage/ParticipantPage";
import Members from "./components/LichnyKabinet/ParticipantPage/Members";
import DownloadCase from "./components/LichnyKabinet/DownloadCase/DownloadCase";
import UploadCase from "./components/LichnyKabinet/UploadCase/UploadDocument";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import ChatPage from "./components/LichnyKabinet/ChatPage/ChatPage";
import ChatBot from "./components/LichnyKabinet/ChatBot/ChatBot";
import ParticlesAuth from "./components/Particles/Particle/ParticleAuth";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />}/>
            <Route path='/o-nas' element={<Home />}/>
            <Route path='news' element={<News />}/>
            <Route path='organizers' element={<Organizers />}/>
            <Route path='graphic' element={<Schedule />}/>
            <Route path='register' element={<Participate />}/>
            <Route path='login' element={<Login />}/>
            <Route path='lk' element={<ProtectedRoutes><LichnyKabinet /></ProtectedRoutes>}/>
            <Route path='download' element={<ProtectedRoutes><DownloadCase/></ProtectedRoutes>}/>
            <Route path='send' element={<ProtectedRoutes><UploadCase/> </ProtectedRoutes>}/>
            <Route path='members' element={<ProtectedRoutes><Members/> </ProtectedRoutes>}/>
            <Route path='contactus' element={<ProtectedRoutes><ChatPage/> </ProtectedRoutes>}/>
            <Route path='chatbot' element={<ProtectedRoutes><ChatBot/> </ProtectedRoutes>}/>
            <Route path='help' element={<HelpLayout/>}>
                <Route path='faq' element={<FAQ/>}/>
                <Route path='contact' element={<ContactUs/>}/>
            </Route>

            <Route path='*' element={<NotFound/>}/>
        </Route>
    )
)
function App() {

  return (
      <AuthContextProvider>
          {/*<ParticlesComponent />*/}
          {/*<ParticlesAuth />*/}
          <RouterProvider router={router} />
      </AuthContextProvider>
  );
}

export default App
