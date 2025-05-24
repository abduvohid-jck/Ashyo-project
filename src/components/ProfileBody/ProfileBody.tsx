import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProfileBody() {
  const [emailFR, setEmailFR] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [verified, setVerified] = useState<any>(null);
  const [email, setEmail] = useState<string>("");
  const [emailF, setEmailF] = useState<string>("");
  const [emailV, setEmailV] = useState<string>("");
  const [otp, setOtp] = useState<string>("");

  const handleChangeEmailFR = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailFR(event.target.value);
  };
  const handleChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleChangeEmailF = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailF(event.target.value);
  };
  const handleChangeEmailV = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailV(event.target.value);
  };
  const handleChangeOtp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(event.target.value);
  };
  function SendOtp() {
    axios
      .post("https://api.ashyo.fullstackdev.uz/auth/send-otp", {
        email: email,
      })
      .then((res) => {
        toast.info(res.data.message);
        setEmail("");
      })
      .catch((error) => toast.error(error.response.data.message));
  }
  useEffect(() => {
    const checkVerified = localStorage.getItem("verified");
    setVerified(checkVerified);
  }, []);
  function VerifyOtp() {
    axios
      .post("https://api.ashyo.fullstackdev.uz/auth/verify-otp", {
        email: emailV,
        otp: otp,
      })
      .then((res) => {
        toast.info(res.data.message);
        localStorage.setItem("verified", res.data.user.is_verified);
        setVerified(res.data.user.is_verified);
        setEmailV("");
        setOtp("");
      })
      .catch((error) => toast.error(error.response.data.message));
  }
  function ForgotPassword() {
    axios
      .post("https://api.ashyo.fullstackdev.uz/auth/forgot-password", {
        email: emailF,
      })
      .then((res) => {
        toast.info(res.data.message);
        setEmailF("");
      })
      .catch((error) => toast.error(error.response.data.message));
  }
  function ResetPassword() {
    axios
      .post("https://api.ashyo.fullstackdev.uz/auth/reset-password", {
        email: emailFR,
        otp: code,
        new_password: password,
      })
      .then((res) => {
        toast.info(res.data.message);
        setEmailFR("");
        setCode("");
        setPassword("");
      })
      .catch((error) => toast.error(error.response.data.message));
  }

  function Logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("verified");
  }

  return (
    <div>
      <div className="container">
        <ToastContainer />
        <div className="flex flex-col desktop:flex-row-reverse desktop:justify-end desktop:items-start desktop:gap-[295px] items-center justify-center mx-auto gap-[50px] mb-[30px] desktop">
          {verified == "true" ? null : (
            <div className="flex flex-col">
              <p className="font-Roboto font-[700] text-[16px] text-[#00000099]">
                Emailingizni tasdiqlang:
              </p>
              <p className="font-Roboto font-[400] text-[12px] text-[#000000B2] mt-[10px] w-[300px]">
                *Emailingizni kiriting va biz emailingizni tasdiqlash uchun unga
                maxsus kod yuboramiz
              </p>
              <input
                className="mt-[14px] mb-[14px] w-[300px] mx-auto py-[12px] px-[14px] border-solid border-[1px] border-[#EAEAEA] rounded-[5px] outline-[#134E9B] font-Roboto font-[400] text-[14px]"
                placeholder="Emailingizni kiriting"
                type="email"
                onChange={handleChangeEmail}
                value={email}
              />
              <button
                onClick={() => SendOtp()}
                className=" w-[300px] h-[45px] mx-auto flex justify-center items-center bg-[#134E9B] rounded-[5px] font-Roboto font-[700] text-[16px] text-[#FFFFFF]"
              >
                Kodni yuborish
              </button>
              <p className="font-Roboto font-[700] text-[16px] text-[#00000099] w-[300px] mt-[50px]">
                Emailingizni tasdiqlash uchun ushbu maydonlarni to'ldiring
              </p>
              <p className="font-Roboto font-[400] text-[12px] text-[#000000B2] mt-[10px] w-[300px]">
                *Emailingizni va unga yuborilgan maxsus kodni kiriting
              </p>
              <input
                className="mt-[14px] mb-[14px] w-[300px] mx-auto py-[12px] px-[14px] border-solid border-[1px] border-[#EAEAEA] rounded-[5px] outline-[#134E9B] font-Roboto font-[400] text-[14px]"
                placeholder="Emailingizni kiriting"
                type="email"
                onChange={handleChangeEmailV}
                value={emailV}
              />
              <input
                className="mt-[14px] mb-[14px] w-[300px] mx-auto py-[12px] px-[14px] border-solid border-[1px] border-[#EAEAEA] rounded-[5px] outline-[#134E9B] font-Roboto font-[400] text-[14px]"
                placeholder="Emailingizga yuborilgan kodni kiriting"
                type="text"
                onChange={handleChangeOtp}
                value={otp}
              />
              <button
                onClick={() => VerifyOtp()}
                className=" w-[300px] h-[45px] mx-auto flex justify-center items-center bg-[#134E9B] rounded-[5px] font-Roboto font-[700] text-[16px] text-[#FFFFFF]"
              >
                Emailni tasdiqlash
              </button>
            </div>
          )}

          <div className="flex flex-col">
            <div className="flex flex-col">
              <p className="font-Roboto font-[700] text-[16px] text-[#00000099]">
                Parolingizni unutdingizmi?
              </p>
              <p className="font-Roboto font-[400] text-[12px] text-[#000000B2] mt-[10px] w-[300px]">
                *Emailingizni kiriting va biz emailingizga parolingizni tiklash
                uchun maxsus kod yuboramiz
              </p>
              <input
                className="mt-[14px] mb-[14px] w-[300px] mx-auto py-[12px] px-[14px] border-solid border-[1px] border-[#EAEAEA] rounded-[5px] outline-[#134E9B] font-Roboto font-[400] text-[14px]"
                placeholder="Emailingizni kiriting"
                type="email"
                onChange={handleChangeEmailF}
                value={emailF}
              />
              <button
                onClick={() => ForgotPassword()}
                className=" w-[300px] h-[45px] mx-auto flex justify-center items-center bg-[#134E9B] rounded-[5px] font-Roboto font-[700] text-[16px] text-[#FFFFFF]"
              >
                Kodni yuborish
              </button>
            </div>
            <p className="font-Roboto font-[700] text-[16px] text-[#00000099] w-[300px] mt-[50px]">
              Parolni o'zgartirish uchun ushbu maydonlarni to'ldiring
            </p>
            <p className="font-Roboto font-[400] text-[12px] text-[#000000B2] mt-[10px] w-[300px]">
              *Emailingizni, parolni qayta tiklash uchun unga yuborilgan maxsus
              kodni kiriting va yangi parolni o'rnating
            </p>
            <input
              className="mt-[14px] mb-[14px] w-[300px] mx-auto py-[12px] px-[14px] border-solid border-[1px] border-[#EAEAEA] rounded-[5px] outline-[#134E9B] font-Roboto font-[400] text-[14px]"
              placeholder="Emailingizni kiriting"
              type="email"
              onChange={handleChangeEmailFR}
              value={emailFR}
            />
            <input
              className="mt-[14px] mb-[14px] w-[300px] mx-auto py-[12px] px-[14px] border-solid border-[1px] border-[#EAEAEA] rounded-[5px] outline-[#134E9B] font-Roboto font-[400] text-[14px]"
              placeholder="Maxsus kodni kiriting"
              type="text"
              onChange={handleChangeCode}
              value={code}
            />
            <input
              className="mt-[14px] mb-[14px] w-[300px] mx-auto py-[12px] px-[14px] border-solid border-[1px] border-[#EAEAEA] rounded-[5px] outline-[#134E9B] font-Roboto font-[400] text-[14px]"
              placeholder="Yangi parolni kiriting"
              type="text"
              onChange={handleChangePassword}
              value={password}
            />
            <button
              onClick={() => ResetPassword()}
              className=" w-[300px] h-[45px] mx-auto flex justify-center items-center bg-[#134E9B] rounded-[5px] font-Roboto font-[700] text-[16px] text-[#FFFFFF]"
            >
              Parolni o'zgartirish
            </button>
          </div>
        </div>
        <Link to="/">
          <button
            onClick={() => Logout()}
            className=" w-[300px] h-[45px] mx-auto flex justify-center items-center bg-[red] rounded-[5px] font-Roboto font-[700] text-[16px] text-[#FFFFFF] mb-[30px]"
          >
            Akkauntdan chiqish
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProfileBody;
