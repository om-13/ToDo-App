import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import {setUser} from "../redux/actions"

export default function WelcomePage(){
    const dispatch = useDispatch();
    const [userEmail,setUserEmail] = useState('');
    const [userName,setUserName] = useState('');
    const navigate = useNavigate()
     
    const handleAddUser = (ev) => {
        ev.preventDefault();
        let user = {
            userEmail,
            userName,
        }
        dispatch(setUser(user));
        navigate(`/General`);
    }

    return (
        <div className="flex flex-row h-screen">
            <div className="flex flex-col w-1/4">
                <div className="mt-40">
                    <h1 className="text-left text-4xl pl-10">WelCome to <br/> Uno ToDo</h1>
                </div>
                <div className="mt-5">
                    <p className="text-left pl-10 text-blue-600">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod soluta aut distinctio voluptatum eaque, consequatur perspiciatis corrupti blanditiis est delectus.
                    </p>
                </div>
                <div className="my-10">
                    <form onSubmit={handleAddUser}>
                        <div className="flex flex-col mx-10">
                            <input type="text" value={userName} 
                            placeholder="your name"
                            onChange={(ev) => setUserName(ev.target.value)}/>
                            <input type="email" value={userEmail} 
                            placeholder="your email"
                            onChange={(ev) => setUserEmail(ev.target.value)}/>
                        </div>
                        <div className="flex justify-around">
                            <button className="bg-blue-700 p-2 text-white rounded-2xl my-5 w-60">Get Started</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="bg-indigo-300 w-3/4">
                <div className="h-screen flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="bg-indigo-400 w-80 h-80 rounded-full">
                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    );
}