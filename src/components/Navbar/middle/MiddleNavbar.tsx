import Logo1 from "../../../assets/photos/logo-1.svg";
import Logo2 from "../../../assets/photos/logo-2.svg";
import Arrow from "../../../assets/icons/arrow-categories.svg";
import MagnifyingGlass from "../../../assets/icons/magnifying-glass.svg";
import Scale from "../../../assets/icons/scale.svg";
import Heart from "../../../assets/icons/heart.svg";
import Cart from "../../../assets/icons/cart.svg";
import { FiUser } from "react-icons/fi";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function MiddleNavbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    event;
  };

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [emailR, setEmailR] = useState<string>("");
  const [passwordR, setPasswordR] = useState<string>("");

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleChangePasword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleChangeEmailR = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailR(event.target.value);
  };
  const handleChangePasswordR = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordR(event.target.value);
  };

  function Login() {
    axios
      .post("https://api.ashyo.fullstackdev.uz/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("verified", res.data.user.is_verified);
        toast.info(res.data.message);
        setOpen(false);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  }

  function Register() {
    axios
      .post("https://api.ashyo.fullstackdev.uz/auth/register", {
        fullname: name,
        email: emailR,
        password: passwordR,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("verified", res.data.user.is_verified);
        toast.info(res.data.message);
        setOpen(false);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  }

  return (
    <div className="mt-[60px] mb-[27px] desktop:mt-[17px]">
      <div className="container">
        <ToastContainer />
        <div className="desktop:flex desktop:items-center desktop:justify-center">
          <div className="flex items-center justify-between desktop:justify-normal">
            <Link to="/">
              <div className="flex items-center desktop:mr-[53px]">
                <img src={Logo1} alt="Logo1" />
                <img src={Logo2} alt="Logo2" />
              </div>
            </Link>

            <p className="font-Roboto font-[600] text-[14px] text-[#203F68] desktop:hidden">
              +998 (71) 123-45-67
            </p>
            {localStorage.getItem("token") ? (
              <Link to="/profile">
                <div className="w-[50px] h-[48px] rounded-[6px] flex justify-center desktop:hidden items-center bg-[#EBEFF3]">
                  <FiUser className="w-[24px] h-[24px] text-[#545D6A]" />
                </div>
              </Link>
            ) : (
              <Button
                onClick={handleOpen}
                sx={{
                  p: 0,
                  minWidth: 0,
                  borderRadius: 0,
                }}
              >
                <div className="w-[50px] h-[48px] rounded-[6px] flex desktop:hidden justify-center items-center bg-[#EBEFF3]">
                  <FiUser className="w-[24px] h-[24px] text-[#545D6A]" />
                </div>
              </Button>
            )}
          </div>
          <div className="mt-[18px] flex items-center justify-between desktop:mt-0 desktop:justify-normal">
            <button className="desktop:mr-[10px] flex gap-[10px] desktop:gap-[20px] items-center justify-center w-[121px] desktop:w-[160px] h-[40px] desktop:h-[48px] bg-[#134E9B] rounded-[3px] desktop:rounded-[6px] font-Roboto font-[500] text-[12px] desktop:text-[16px] text-[#FFFFFF]">
              Kategorya <img src={Arrow} alt="Arrow" />
            </button>
            <div className="bg-[#EBEFF3] flex items-center pl-[21.03px] desktop:pl-[26px] gap-[32.57px] rounded-[3px] desktop:rounded-[6px]">
              <input
                className="w-[136.4px] desktop:w-[425px] my-[12px] desktop:my-[14.3px] bg-[#EBEFF3] outline-none font-Roboto font-[400] text-[10px] desktop:text-[13px]"
                type="text"
                placeholder="What are you looking for?"
              />
              <button className="desktop:w-[60px] w-[40px] desktop:h-[48px] h-[40px] bg-[#134E9B] rounded-[3px] desktop:rounded-[6px] flex justify-center items-center">
                <img src={MagnifyingGlass} alt="Magnifying glass" />
              </button>
            </div>
          </div>
          <div className="flex desktop:ml-[51px] desktop:items-center desktop:gap-[15px]">
            <div className="hidden desktop:flex w-[50px] h-[48px] rounded-[6px]  justify-center items-center bg-[#EBEFF3]">
              <img src={Scale} alt="Scale" />
            </div>
            <div className="hidden desktop:flex w-[50px] h-[48px] rounded-[6px]  justify-center items-center bg-[#EBEFF3]">
              <img src={Heart} alt="Heart" />
            </div>
            <div className="hidden desktop:flex w-[50px] h-[48px] rounded-[6px]  justify-center items-center bg-[#EBEFF3]">
              <img src={Cart} alt="Cart" />
            </div>
            {localStorage.getItem("token") ? (
              <Link to="/profile">
                <div className="w-[50px] h-[48px] rounded-[6px] justify-center hidden desktop:flex items-center bg-[#EBEFF3]">
                  <FiUser className="w-[24px] h-[24px] text-[#545D6A]" />
                </div>
              </Link>
            ) : (
              <Button
                onClick={handleOpen}
                sx={{
                  p: 0,
                  minWidth: 0,
                  borderRadius: 0,
                }}
              >
                <div className="w-[50px] h-[48px] rounded-[6px] hidden desktop:flex justify-center items-center bg-[#EBEFF3]">
                  <FiUser className="w-[24px] h-[24px] text-[#545D6A]" />
                </div>
              </Button>
            )}

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 400,
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                  borderRadius: "3px",
                }}
              >
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Tabs
                    TabIndicatorProps={{
                      style: {
                        backgroundColor: "#134E9B",
                      },
                    }}
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab
                      sx={{
                        color: "#134E9B",
                        "&.Mui-selected": {
                          color: "#134E9B",
                        },
                      }}
                      label="Login"
                      {...a11yProps(0)}
                    />
                    <Tab
                      sx={{
                        color: "#134E9B",
                        "&.Mui-selected": {
                          color: "#134E9B",
                        },
                      }}
                      label="Ro'yxatdan o'tish"
                      {...a11yProps(1)}
                    />
                  </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                  <div>
                    <p className="font-Roboto font-[400] text-[12px] text-[#3D3D3D]">
                      Hisobingizga kirish uchun email va parolingizni kiriting
                    </p>
                    <input
                      className="mt-[14px] w-[300px] mx-auto py-[12px] px-[14px] border-solid border-[1px] border-[#EAEAEA] rounded-[5px] outline-[#134E9B] font-Roboto font-[400] text-[14px]"
                      placeholder="Emailingizni kiriting"
                      value={email}
                      onChange={handleChangeEmail}
                    />
                    <input
                      className="w-[300px] mx-auto mt-[17px] border-solid border-[1px] border-[#EAEAEA] rounded-[5px] outline-[#134E9B] py-[12px] px-[14px] font-Roboto font-[400] text-[14px]"
                      placeholder="Parolingizni kiriting"
                      type="password"
                      value={password}
                      onChange={handleChangePasword}
                    />
                    <button
                      onClick={() => {
                        Login();
                      }}
                      className="mt-[27px] w-[300px] h-[45px] mx-auto flex justify-center items-center bg-[#134E9B] rounded-[5px] font-Roboto font-[700] text-[16px] text-[#FFFFFF]"
                    >
                      Login
                    </button>
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <div>
                    <p className="font-Roboto font-[400] text-[11px] text-[#3D3D3D]">
                      Ro'yxatdan o'tish uchun ismingiz, email va parolingizni
                      kiriting
                    </p>
                    <input
                      className="mt-[14px] w-[300px] mx-auto py-[12px] px-[14px] border-solid border-[1px] border-[#EAEAEA] rounded-[5px] outline-[#134E9B] font-Roboto font-[400] text-[14px]"
                      placeholder="Ismingizni kiriting"
                      value={name}
                      onChange={handleChangeName}
                    />
                    <input
                      className="mt-[14px] w-[300px] mx-auto py-[12px] px-[14px] border-solid border-[1px] border-[#EAEAEA] rounded-[5px] outline-[#134E9B] font-Roboto font-[400] text-[14px]"
                      placeholder="Emailingizni kiriting"
                      value={emailR}
                      onChange={handleChangeEmailR}
                    />
                    <input
                      className="w-[300px] mx-auto mt-[17px] border-solid border-[1px] border-[#EAEAEA] rounded-[5px] outline-[#134E9B] py-[12px] px-[14px] font-Roboto font-[400] text-[14px]"
                      placeholder="Parolingizni kiriting"
                      type="password"
                      value={passwordR}
                      onChange={handleChangePasswordR}
                    />
                    <button
                      onClick={() => {
                        Register();
                      }}
                      className="mt-[27px] w-[300px] h-[45px] mx-auto flex justify-center items-center bg-[#134E9B] rounded-[5px] font-Roboto font-[700] text-[16px] text-[#FFFFFF]"
                    >
                      Ro'yxatdan o'tish
                    </button>
                  </div>
                </CustomTabPanel>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleNavbar;
