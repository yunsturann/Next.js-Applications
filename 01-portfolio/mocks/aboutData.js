import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaSchool, FaPhoneAlt, FaRegUser, FaCalendar } from "react-icons/fa";

export const aboutSkillsData = [
  {
    title: "react",
    ratio: 60,
  },
  {
    title: "HTML/CSS",
    ratio: 65,
  },
  {
    title: "Javascript",
    ratio: 85,
  },
  {
    title: "Next.js",
    ratio: 50,
  },
  {
    title: "Tailwind",
    ratio: 80,
  },
  {
    title: "MsSql",
    ratio: 75,
  },
];

export const aboutLinks = ["Personal Info", "Personal Detail", "Skills"];

export const personalData = [
  {
    icon: <FaRegUser />,
    content: "Yunus Turan",
  },
  {
    icon: <IoIosMail />,
    content: "eynstrne@gmail.com",
  },
  {
    icon: <FaSchool />,
    content: "Eskişehir Osmangazi Üniversitesi",
  },
  {
    icon: <FaPhoneAlt />,
    content: "0500 000 00 00",
  },
  {
    icon: <FaCalendar />,
    content: "Born on 16 Jan, 2002",
  },
  {
    icon: <FaLocationDot />,
    content: "Eskişehir, Türkiye",
  },
];
