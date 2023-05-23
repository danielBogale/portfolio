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
import rewardSystem from "../assets/images/work_images/rewardSystem.png";
import membershipSystem from "../assets/images/work_images/memebershipSystem.webp";

// blog post images

import spring from "../assets/images/blog_images/springsecurity.png";
import blog1 from "../assets/images/blog_images/1.jpg";

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
import { FaBlogger, FaRegUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

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
      tag: "Backend",
      title: "Badge and Membership System",
      img: membershipSystem,
      imgSmall: membershipSystem,
      bg: "#F0F0FF",
      client: "MIU",
      tools: "Spring Data JPA, Spring Security, SQL, Lombok, Model Mapper",
      link: "https://dev.azure.com/cs544-2023-03-09/Project/_git/Project/",
      linkText: "https://dev.azure.com/cs544-2023-03-09/Project/_git/Project/",
      description:
        "The Badge and Membership system is designed to automate badge checking and the membership system. It uses technologies such as Spring Data JPA, Spring Security, SQL, Lombok, and Model Mapper to provide an efficient and reliable system for managing badges and memberships. With this system, manual badge checking becomes a thing of the past, and membership management becomes much more straightforward.",
    },
    {
      id: "4",
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
        " The Library Management System is a Java-based application designed to help libraries efficiently manage their resources. With a user-friendly interface built using Swing, librarians can easily catalog books, track borrowing and returns, and manage inventory. This system streamlines library operations and improves the user experience for both librarians and patrons..",
    },
    {
      id: "5",
      tag: "Logo",
      title: "Distributed System Snapshot",
      img: work3,
      imgSmall: work3,
      bg: "#FFF0F0",
      client: "Personal",
      tools: "Illustrator",
      link: "https://github.com/danielBogale/DS-Snapshot",
      linkText: "https://github.com/danielBogale/DS-Snapshot",
      description: "A distributed bancking snapshot system.",
    },
    {
      id: "7",
      tag: "UI/UX",
      title: "Social APP UI",
      img: work5,
      imgSmall: work5,
      bg: "#FFFAE9",
      client: "Personal",
      tools: "Photoshop",
      link: "https://github.com/zadigg/Book-Store",
      linkText: "www.github.com/zadigg/Book-Store",
      description: " simpel UI ",
    },
  ];
  const [data, setData] = useState(workItems);

  // Elements for Blogs section
  const blogsData = [
    {
      id: "1",
      img: spring,
      imgSmall: spring,
      date: "21 May 2023",
      category: "Educational",
      URL: "https://medium.com/@gdr.dani/microservice-orchestration-and-choreography-design-patterns-and-best-practices-1f8a06ed555",
      title:
        "Microservice Orchestration and Choreography: Design Patterns and Best Practices.",
      bg: "#FCF4FF",
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
  const serviceArray = [
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

  // educationArray items for Resume page
  const educationArray = [
    {
      id: 1,
      date: "2022-2023",
      title: "Msc in Computer Science ",
      place: "MIU, Fairfield, USA",
      bg: "#FFF4F4",
    },
    {
      id: 2,
      date: "2014-2017",
      title: "MSc in Telecommunications Engineering",
      place: "University of Trento, trento, Italy",
      bg: "#FFF1FB",
    },
    {
      id: 3,
      date: "2014-2017",
      title: "MSc in Telecommunications Engineering",
      place: "University of Trento, trento, Italy",
      bg: "#FFF1FB",
    },
  ];
  // experiencesArray items for Resume page
  const experiencesArray = [
    {
      id: 1,
      date: "Jan/2021 – Aug/2022",
      title: "Software Engineer II ",
      place: "SHI-TSEGA Technologies, Addis Ababa, Ethiopia",
      bg: "#EEF5FA",
    },

    {
      id: 2,
      date: "Apr/2019 – Jan/2021",
      title: "Full Stack Java Developer – React ",
      place: "Her IT Solutions, Addis Ababa, Ethiopia",
      bg: "#F2F4FF",
    },

    {
      id: 3,
      date: "Nov/2018 – Apr/2019",
      title: "Junior Java Developer ",
      place: "Her IT Solutions, Addis Ababa, Ethiopia",
      bg: "#EEF5FA",
    },
  ];
  // awardsArray items for Resume page
  const awardsArray = [
    {
      id: 1,
      date: "2020-2021",
      title: " Cisco",
      place: "Hawassa University, Hawassa, Ethiopia",
      bg: "#FCF4FF",
    },

    {
      id: 2,
      date: "2021 - 2022",
      title: "Java Developer",
      place: "Tim Buchalka (Java).",
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
      item1: "+17034698841",
      bg: "#FCF4FF",
    },
    {
      id: "02",
      icon: iconEmail,
      title: "Email ",
      item1: "gdr.dani@gmail.com",
      item2: "dbogale@miu.edu",
      bg: "#EEFBFF",
    },
    {
      id: "03",
      icon: iconMap,
      title: "Address ",
      item1: "1000 N 4th St, Fairfield",
      item2: "52557, Iowa, USA",
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
    serviceArray,
    sliderImg,
    educationArray,
    experiencesArray,
    awardsArray,
    lineArray,
    contactArray,
  };
};

export default AllData;
