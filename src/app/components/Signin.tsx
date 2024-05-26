"use client";

import { FaUser, FaLock } from "react-icons/fa";
import signin from "@/lib/signin";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signinUser } from "../GlobalRedux/features/userSlice";

const Signin = ({ setOpenSignin }: { setOpenSignin: any }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  async function handleSignIn() {
    setIsLoading(true);
    const signedIn = await signin(username, password);
    setIsLoading(false);
    if (signedIn) {
      dispatch(signinUser({ username: username }));
      setOpenSignin(false);
    }
  }
  return (
    <>
      <div className="animate__animated animate__faster flex justify-start items-center rounded-md flex-col p-4 animate__zoomIn bg-white border w-[400px] min-h-[200px]">
        <div className="flex flex-col justify-center min-h-[200px]">
          <div>
            <div className="bg-white rounded-sm border border-purple-900 flex items-center p-1">
              <FaUser />
              <input
                type="text"
                name="username"
                placeholder="نام کاربری"
                className="bg-transparent text-purple-900 px-4 py-1 focus:outline-none"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="bg-white rounded-sm border border-purple-900 flex items-center p-1 mt-5">
              <FaLock />
              <input
                type="password"
                name="password"
                placeholder="رمز عبور"
                className="bg-transparent text-purple-900 px-4 py-1 focus:outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            disabled={isLoading}
            className="bg-red-800 font-semibold text-slate-100 py-2 px-4 rounded-2xl mt-auto disabled:bg-slate-200 disabled:text-slate-700"
            onClick={() => handleSignIn()}
          >
            {isLoading ? "منتظر بمانید ..." : "ورود کنید"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Signin;
