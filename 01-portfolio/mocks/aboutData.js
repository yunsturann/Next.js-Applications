import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaSchool, FaPhoneAlt, FaRegUser, FaCalendar } from "react-icons/fa";

export const aboutSkillsData = [
  {
    title: "HTML/CSS",
    ratio: 80,
  },
  {
    title: "react",
    ratio: 60,
  },
  {
    title: "Javascript",
    ratio: 65,
  },
  {
    title: "Next.js",
    ratio: 60,
  },
  {
    title: "SQL",
    ratio: 70,
  },
  {
    title: "Tailwind",
    ratio: 85,
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
