import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/actions/UserActions";

const Header = () => {
  const dispatch = useDispatch()
  const {isAuth} = useSelector(s => s.user)
  return (
    <header className="bg-green-600">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/"><p className="text-2xl">NEWS 24</p></Link>
        <ul className="flex justify-between py-5 px-4">
          <li className="mr-3 text-white"><Link to="/">Home</Link></li>
          <li className="mr-3 text-white"><Link to="/news">News</Link></li>
          {
            !isAuth &&
            <li><Link to="/login">Login</Link></li>
          }
          {
            isAuth &&
              <li><button onClick={() => dispatch(logout())}>Logout</button></li>
          }
        </ul>
      </div>
    </header>
  );
};

export default Header;