import { useEffect, useState } from "react";
// for work_images
import work1 from "../assets/images/work_images/1.jpg";
import work2 from "../assets/images/work_images/2.jpg";
import work3 from "../assets/images/work_images/3.jpg";
import work4 from "../assets/images/work_images/4.jpg";
import work5 from "../assets/images/work_images/5.jpg";
import work6 from "../assets/images/work_images/6.jpg";
import work7 from "../assets/images/work_images/7.jpg";
import work8 from "../assets/images/work_images/8.jpg";
import work9 from "../assets/images/work_images/9.jpg";
// works small images
import workSmall1 from "../assets/images/work_images/small/1.jpg";
import workSmall2 from "../assets/images/work_images/small/2.jpg";
import workSmall3 from "../assets/images/work_images/small/3.jpg";
import workSmall4 from "../assets/images/work_images/small/4.jpg";
import workSmall5 from "../assets/images/work_images/small/5.jpg";
import workSmall6 from "../assets/images/work_images/small/6.jpg";
import workSmall7 from "../assets/images/work_images/small/7.jpg";
import workSmall8 from "../assets/images/work_images/small/8.jpg";
import workSmall9 from "../assets/images/work_images/small/9.jpg";
// blog post images
import blog6 from "../assets/images/blog_images/6.jpg";
import blog4 from "../assets/images/blog_images/4.jpg";
import blog2 from "../assets/images/blog_images/2.jpg";
import blog1 from "../assets/images/blog_images/1.jpg";
import blog3 from "../assets/images/blog_images/3.jpg";
import blog5 from "../assets/images/blog_images/5.jpg";
// blog image small
import blogSmall6 from "../assets/images/blog_images/small/6.jpg";
import blogSmall4 from "../assets/images/blog_images/small/4.jpg";
import blogSmall2 from "../assets/images/blog_images/small/2.jpg";
import blogSmall1 from "../assets/images/blog_images/small/1.jpg";
import blogSmall3 from "../assets/images/blog_images/small/3.jpg";
import blogSmall5 from "../assets/images/blog_images/small/5.jpg";

import img1 from "../assets/images/slider/brand-1.png";
import img2 from "../assets/images/slider/brand-2.png";
import img3 from "../assets/images/slider/brand-3.png";
import img4 from "../assets/images/slider/brand-4.png";
import img5 from "../assets/images/slider/brand-5.png";
//  icon use as img here
import icon from "../assets/images/icons/icon-1.svg";
import icon1 from "../assets/images/icons/icon-2.svg";
import icon2 from "../assets/images/icons/icon-3.svg";
import icon3 from "../assets/images/icons/icon-4.svg";
import icon4 from "../assets/images/icons/icon-5.svg";
import icon5 from "../assets/images/icons/icon-6.svg";
// contact image
import iconPhone from "../assets/images/contact/phone-call 1.png";
import iconEmail from "../assets/images/contact/email 1.png";
import iconMap from "../assets/images/contact/map 1.png";
import { CgNotes } from "react-icons/cg";
import { FaBlogger, FaRegUser, FaAward } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // find items for Blogs  modal open
  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for protfilo section
  const workItems = [
    {
      id: "1",
      tag: "UI/UX",
      title: "Music Player",
      img: work1,
      imgSmall: work1,
      bg: "#FFF0F0",
      client: "MIU",
      tools: "Js, Node, Express, MySQL",
      link: "https://github.com/zadigg/Music-player",
      linkText: "www.github.com/zadigg/Music-player",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!",
    },
    {
      id: "2",
      tag: "Web Design",
      title: "Library Managment System",
      img: work2,
      imgSmall: work2,
      bg: "#FFF3FC",
      client: "MIU",
      tools: "Java, Swing",
      link: "https://github.com/zadigg/Library-System",
      linkText: "www.github.com/zadigg/Library-System",
      description:
        "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",
    },
    {
      id: "3",
      tag: "Logo",
      title: "Book Store",
      img: work3,
      imgSmall: work3,
      bg: "#FFF0F0",
      client: "Personal",
      tools: "Illustrator",
      link: "https://github.com/zadigg/Book-Store",
      linkText: "www.github.com/zadigg/Book-Store",
      description:
        "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",
    },
    {
      id: "4",
      tag: "Video",
      title: "Social App UI",
      img: work4,
      imgSmall: work4,
      bg: "#E9FAFF",
      client: "Personal",
      tools: "After Effect",
      link: "https://github.com/zadigg/Cloned-Airbnb",
      linkText: "<www.github.com/zadigg/Cloned-Airbnb",
      description:
        "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",
    },
    {
      id: "5",
      tag: "UI/UX",
      title: "Social APP UI",
      img: work5,
      imgSmall: work5,
      bg: "#FFFAE9",
      client: "Personal",
      tools: "Photoshop",
      link: "https://github.com/zadigg/Book-Store",
      linkText: "www.github.com/zadigg/Book-Store",
      description:
        "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",
    },
    {
      id: "6",
      tag: "Video",
      title: "Twitter Clone",
      img: work6,
      imgSmall: work6,
      bg: "#F4F4FF",
      client: "Personal",
      Tools: "Next.js, Sanity, Typescript, SSR, Tailwind, NextAuth",
      link: "https://github.com/zadigg/Twitter-Clone-with-with-REACT.JS-Next.js-Sanity-CMS-Typescript-SSR-Tailwind-NextAuth-",
      linkText: "www.github.com",
      description:
        "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",
    },
    {
      id: "7",
      tag: "UI/UX",
      title: "Netlix Clone",
      img: work7,
      imgSmall: work7,
      bg: "#FFF0F8",
      client: "Personal",
      tools: "Next.js, Sanity, Typescript, SSR, Tailwind, NextAuth",
      link: "https://github.com/zadigg/ClonedNetflix",
      linkText: "www.github.com/zadigg/ClonedNetflix",
      description:
        "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",
    },
    {
      id: "8",
      tag: "Web Design",
      title: "Amazon Clone",
      img: work8,
      imgSmall: work8,
      bg: "#FFF0F8",
      client: "Personal",
      tools: "Next.js, Sanity, Typescript, SSR, Tailwind, NextAuth",
      link: "https://github.com/zadigg/amazonclone2",
      linkText: "www.github.com/zadigg/amazonclone2",
      description:
        "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",
    },
    {
      id: "9",
      tag: "Logo",
      title: "Hulu Clone",
      img: work9,
      imgSmall: work9,
      bg: "#FCF4FF",
      client: "Personal",
      tools: "Next.js, Sanity, Typescript, SSR, Tailwind, NextAuth",
      link: "https://github.com/zadigg/huluclone",
      linkText: "www.github.com/zadigg/huluclone",
      description:
        "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",
    },
  ];
  const [data, setData] = useState(workItems);

  // Elements for Blogs section
  const blogsData = [
    {
      id: "1",
      img: blog1,
      imgSmall: blog1,
      date: "177 April",
      category: "Inspiration",
      title: "How to Own Your Audience by Creating an Email List.",
      bg: "#FCF4FF",
      description:
        "What Happens When You Type google.com in Your Browser and Press Enter When you type 'google.com' into your browser and press enter, a few things happen\n 1. Your browser sends a request to a DNS server to resolve the IP address for 'google.com'.\n2. The DNS server responds with the IP address for 'google.com'.\n3.Your browser sends a request to the server at that IP address.\n4. The server at that IP address responds with the HTML code for the 'google.com' home page.\n5. Your browser renders the HTML code and displays the 'google.com' home page\n.How does the browser look up an IP address for the domain? After you've typed the URL into your browser and pressed enter, the browser needs to figure out which server on the Internet to connect to. To do that, it needs to look up the IP address of the server hosting the website using the domain you typed in. It does this using a DNS lookup. You can read more about how DNS works here.Because DNS is complex and has to be blazingly fast, DNS data is cached at different layers between your browser and various places across the Internet. Your browser checks its cache, the operating system cache, a local network cache at your router, and a DNS server cache on your corporate network or at your internet service provider (ISP). If the browser cannot find the IP address at any of those cache layers, the DNS server on your corporate network or at your ISP does a recursive DNS lookup. A recursive DNS lookup asks multiple DNS servers around the Internet, which in turn asks more DNS servers for the DNS record until it is found.Once the browser gets the DNS record with the IP address, it's time for it to find the server on the Internet and establish a connection. ",
    },
  ];

  // Menu items for Homepage One
  const menuItem = [
    {
      id: "01",
      name: "Home",
      link: "homePage",
      icon: <AiOutlineHome />,
    },
    {
      id: "02",
      name: "About",
      link: "about",
      icon: <FaRegUser />,
    },
    {
      id: "06",
      name: "Resume",
      link: "resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "works",
      icon: <FiCodesandbox />,
    },
    {
      id: "04",
      name: "Blogs",
      link: "blogs",
      icon: <FaBlogger />,
    },
    {
      id: "05",
      name: "Contact",
      link: "contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Slider image for Clients
  const sliderImg = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img2,
    img3,
    img4,
    img5,
  ];

  // experience items for about page
  const experienceArray = [
    {
      id: "1",
      icon: icon,
      title: "Ui/Ux Design",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#D566FF",
      bg: "#FCF4FF",
    },
    {
      id: "2",
      icon: icon1,
      title: "App Development",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    {
      id: "3",
      icon: icon2,
      title: "Photography",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#8774FF",
      bg: "#FCF4FF",
    },
    {
      id: "4",
      icon: icon3,
      title: "Photography",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#FF6080",
      bg: "#FFF4F4",
    },
    {
      id: "5",
      icon: icon4,
      title: "Managment",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#FF75D8",
      bg: "#FFF0F8",
    },
    {
      id: "6",
      icon: icon5,
      title: "Web Development",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#269FFF",
      bg: "#F3FAFF",
    },
  ];

  // Resume items for Resume page
  const resumeArray = [
    {
      type: "Education",
      icon: MdOutlineSchool,
      id: "01",
      date: "2022-2023",
      title: "BSC in Computer Science ",
      place: "MIU, Fairfield, USA",
      bg: "#FFF4F4",

      id1: "02",
      date1: "2022 - Present",
      title1: "Software Engineering",
      place1: "Holberton School, Online",
      bg1: "#FFF1FB",

      id2: "03",
      date2: "2016-2019",
      title2: "BSC in Business Managment ",
      place2: "Rift Valley University, Hawassa, Ethiopia",
      bg2: "#FFF4F4",

      id3: "04",
      date3: "2016-2020",
      title3: "BSC in Computer Science ",
      place3: "Hawassa University, Hawassa, Ethiopia",
      bg3: "#FFF1FB",
    },
    {
      type: "Experience",
      icon: MdOutlineBusinessCenter,
      id: "04",
      date: "2021-2022",
      title: "Software Developer",
      place: "ShiTsega, Addis Ababa, Ethiopia",
      bg: "#EEF5FA",

      id1: "05",
      date1: "2016-2020",
      title1: "Software Developer",
      place1: "Hawassa University, Internship.",
      bg1: "#F2F4FF",

      id2: "06",
      date2: "2008",
      title2: "Freelancer",
      place2: "Freelance TG Bot.",
      bg2: "#EEF5FA",
    },
    {
      type: "Awards",
      icon: FaAward,
      id: "07",
      date: "2020-2021",
      title: " Cisco",
      place: "Hawassa University, Hawassa, Ethiopia",
      bg: "#FCF4FF",

      id1: "08",
      date1: "2021 - 2022",
      title1: "Java Developer",
      place1: "Tim Buchalka (Java).",
      bg1: "#FCF9F2",
    },
  ];

  // Working Skills items for Resume page
  const lineArray = [
    {
      id: "01",
      color: "#FF6464",
      name: "Web Design",
      number: "80",
    },
    {
      id: "02",
      color: "#9272D4",
      name: "Mobile App ",
      number: "95",
    },
    {
      id: "03",
      color: "#5185D4",
      name: "Illustrator",
      number: "65",
    },
    {
      id: "03",
      color: "#CA56F2",
      name: "Photoshope",
      number: "75",
    },
  ];

  // Personal information for contact pages
  const contactArray = [
    {
      id: "01",
      icon: iconPhone,
      title: "Phone ",
      item1: "+641 233 9191",
      bg: "#FCF4FF",
    },
    {
      id: "02",
      icon: iconEmail,
      title: "Email ",
      item1: "abelkibebe5@gmail.com",
      item2: "abel.negash@gmail.com",
      bg: "#EEFBFF",
    },
    {
      id: "03",
      icon: iconMap,
      title: "Address ",
      item1: "1000 N 4th St 52557,",
      item2: "Fairfield, Iowa, USA",
      bg: "#F2F4FF",
    },
  ];

  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
    menuItem,
    NavLink,
    experienceArray,
    sliderImg,
    resumeArray,
    lineArray,
    contactArray,
  };
};

export default AllData;
