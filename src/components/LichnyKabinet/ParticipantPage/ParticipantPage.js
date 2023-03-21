import React, {useEffect, useState} from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import {Link, NavLink, useNavigate} from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import {
    RiLogoutBoxRFill,

} from "react-icons/ri"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PublishIcon from '@mui/icons-material/Publish';
import {FcSms, FcUpload, FcDownload} from 'react-icons/fc'
import {MdWifiCalling} from 'react-icons/md'
import {Button, Card, CardActions, CardContent, Grid, Paper} from "@mui/material"
import Members from "./Members"
import {useAuth} from "../../../context/AuthContext";
import DownloadCase from "../DownloadCase/DownloadCase";


export default function LichnyKabinet() {
    const {user, logout} = useAuth()
    const navigate = useNavigate()




    const handleLogout = async () => {
        try {
            await logout()
            navigate('/login')
            console.log("You logged out")
        } catch (err) {
            console.log(err.message);
        }
    }
    const menus = [
        { name: "Скачать Кейс", link: "/download", icon: FcDownload },
        { name: "Отправить работу", link: "/send", icon: FcUpload },
        { name: "Участники и роли", link: "/members", icon: TbReportAnalytics, margin: true },
        { name: "Связаться с нами", link: "/contactus", icon: MdWifiCalling },
        { name: "Чат-бот", link: "/chatbot", icon: FcSms },
        { name: "Выход из системы", link: "/login", icon: RiLogoutBoxRFill, margin: true, action: handleLogout },
    ];
    const [open, setOpen] = useState(true);

    return (
        <section className="flex gap-6">
            <div
                className={`bg-[#0e0e0e] min-h-screen ${
                    open ? "w-72" : "w-16"
                } duration-500 text-gray-100 px-4`}
            >
                <div className="py-3 flex justify-end">
                    <HiMenuAlt3
                        size={26}
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <div className="mt-4 flex flex-col gap-4 relative">
                    {menus?.map((menu, i) => (
                        <NavLink
                            onClick={menu?.action}
                            to={menu?.link}
                            key={i}
                            className={` ${
                                menu?.margin && "mt-5"
                            } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                        >
                            <div className={'text-red'}>{React.createElement(menu?.icon, { size: "20" })}</div>
                            <h2
                                style={{
                                    transitionDelay: `${i + 3}00ms`,
                                }}
                                className={`text-white font-poppins text-xl tracking-wide whitespace-pre duration-500 ${
                                    !open && "opacity-0 translate-x-28 overflow-hidden"
                                }`}
                            >
                                {menu?.name}
                            </h2>
                            <h2
                                className={`${
                                    open && "hidden"
                                } absolute left-48 bg-white font-semibold 
                                whitespace-pre text-gray-900 rounded-md 
                                drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 
                                group-hover:py-1 group-hover:left-14 group-hover:duration-300 
                                group-hover:w-fit`}
                            >
                                {menu?.name}
                            </h2>
                        </NavLink>
                    ))}
                </div>
            </div>
            <div >
                <div
                    className='App bg-gray-900 h-screen px-2 w-fit relative
                    overflow-hidden flex justify-center items-center'
                >
                    <Grid container rowSpacing={1}
                          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                        <Grid item xs={8}>
                            <h1 className="text-white font-poppins text-2xl tracking-widest">{`Welcome: ${user && user.email}`.toUpperCase()}</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <Members/>
                        </Grid>
                        <Grid item container xs={12} rowSpacing={1}
                              columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid container item xs={6}>
                                <Grid item xs={12} rowSpacing={1}
                                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Card sx={{ minWidth: 275 }}>
                                        <CardContent>
                                            <Button variant="contained">Скачать Кейс <FileDownloadIcon fontSize='large' /></Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} rowSpacing={1}
                                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Card sx={{ minWidth: 275 }}>
                                        <CardContent>
                                            <Button variant="contained">Отправить решении кейса <PublishIcon size='large' color='primary'/></Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container spacing={1} rowSpacing={1}
                                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid xs={6} item container rowSpacing={1}
                                          columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                        <Grid xs={6} item container rowSpacing={1}
                                              columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={6}>
                                                <Paper sx={{
                                                    height: 100,
                                                    textAlign: 'center',
                                                    width: 100,
                                                    backgroundColor: (theme) =>
                                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                                }}>
                                                    <SocialIcon url={'https://github.com/boodscode237'}/>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Paper sx={{
                                                    height: 100,
                                                    textAlign: 'center',
                                                    width: 100,
                                                    backgroundColor: (theme) =>
                                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                                }}>
                                                    <SocialIcon url={'https://twitter.com/LiubliuYa'}/>
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                        <Grid xs={6} item container rowSpacing={1}
                                              columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={6}>
                                                <Paper sx={{
                                                    height: 100,
                                                    textAlign: 'center',
                                                    width: 100,
                                                    backgroundColor: (theme) =>
                                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                                }}>
                                                    <SocialIcon url={'https://www.linkedin.com/in/brice-abodo-7995061b0'}/>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Paper sx={{
                                                    height: 100,
                                                    textAlign: 'center',
                                                    width: 100,
                                                    backgroundColor: (theme) =>
                                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                                }}>
                                                    <SocialIcon url={'https://www.facebook.com/don.bri.965'}/>
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>

                    </Grid>
                </div>
            </div>
        </section>
    )
}