import "animate.css";
import signup from "@/lib/signup";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

let userName: string;

function Submit({ disabled, fn }: { disabled: boolean; fn: Function }) {
  const status = useFormStatus();

  fn(status.pending, status.data?.get("username"));

  return (
    <button
      disabled={status.pending || !disabled}
      className="bg-blue-800 font-semibold text-slate-100 py-2 px-4 rounded-2xl mt-auto disabled:bg-slate-200 disabled:text-slate-700"
    >
      {status.pending ? "منتظر بمانید ..." : "ثبت نام کنید"}
    </button>
  );
}

const Signup = ({ setOpenSignup }: { setOpenSignup: Function }) => {
  const [agreement, setAgreement] = useState(false);
  const [checkbox, setCheckbox] = useState(false);

  function handleCheckbox(check: boolean, username: string) {
    setCheckbox(check);
    if (username) userName = username;
    if (!check && userName) setOpenSignup(false);
  }

  return (
    <>
      <div className="animate__animated animate__faster flex justify-start items-center rounded-md flex-col p-4 animate__zoomIn bg-white border w-[400px] min-h-[250px]">
        <form
          action={signup}
          className="flex flex-col justify-center min-h-[250px]"
        >
          <div>
            <div className="bg-white rounded-sm border border-purple-900 flex items-center p-1">
              <FaUser />
              <input
                type="text"
                name="username"
                placeholder="نام کاربری"
                className="bg-transparent text-purple-900 px-4 py-1 focus:outline-none"
              />
            </div>
            <div className="bg-white rounded-sm border border-purple-900 flex items-center p-1 mt-5">
              <FaLock />
              <input
                type="password"
                name="password"
                placeholder="رمز عبور"
                className="bg-transparent text-purple-900 px-4 py-1 focus:outline-none"
              />
            </div>
            <div className="flex gap-2 flex-row-reverse mt-3 justify-end">
              <label htmlFor="agreement" className="text-slate-700 text-lg">
                قوانین را می پذیرم
              </label>
              <input
                id="agreement"
                type="checkbox"
                disabled={checkbox}
                onChange={() => setAgreement(!agreement)}
              />
            </div>
          </div>
          <Submit disabled={agreement} fn={handleCheckbox} />
        </form>
      </div>
    </>
  );
};

export default Signup;
