import './styles.css'
import { BrowserRouter as Router, Route, Link, Outlet } from 'react-router-dom'
import { AiOutlineUser, AiFillDashboard } from 'react-icons/ai'


export const Menu = () => {
    return (
        <div className="menu">
            <div className="pages">
                <Link to="/"><AiFillDashboard /> Dashbaord</Link>


                <Link to="profile">
                    <div className="profile-link">
                        <AiOutlineUser /> Profile
                    </div>
                </Link>


                <Link to="text">
                    <div className="text-link">
                        <AiOutlineUser /> Test
                    </div>
                </Link>

            </div>
            <Outlet />
        </div>
    )
}
