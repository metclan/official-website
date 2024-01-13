type NavRoute = {
  name: string;
  isDropdown: boolean;
  directories: NavRoute[] | string;
};
export const navRoutes: NavRoute[] = [
  {
    name: "Home",
    directories: "/",
    isDropdown: false,
  },
  {
    name: "Products",
    directories: [
      { name: "Stocksavvy", isDropdown: false, directories: "/stocksavvy" },
    ],
    isDropdown: true,
  },
  {
    name: "Services",
    directories: [
      {
        name: "Web Development",
        isDropdown: false,
        directories: "/services/web-development",
      },
      {
        name: "UI/UX Development",
        isDropdown: false,
        directories: "/services/ui-development",
      },
      // {
      //   name: "Blockchain Development",
      //   isDropdown: false,
      //   directories: "/services/blockchain-development",
      // },
    ],
    isDropdown: true,
  },
  {
    name: "Our Company",
    directories: [
      { name: "About us", directories: "/about", isDropdown: false },
      { name: "Contact us", directories: "/contact", isDropdown: false },
      { name: "Our mission", directories: "/mission", isDropdown: false },
    ],
    isDropdown: true,
  },
  {
    name: "Projects",
    directories: "/projects",
    isDropdown: false,
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "At Metclan, our expert web development team transforms ideas into immersive digital experiences. We specialize in crafting bespoke websites and web applications that seamlessly blend cutting-edge technology with stunning design",
    link: "/web-development",
  },

  {
    id: 2,
    title: "UI/UX",
    description:
      "We redefine digital interactions through our unparalleled UI/UX design expertise. Our dedicated team of designers meticulously crafts user interfaces that not only captivate but intuitively guide users through seamless and delightful experiences.",
    link: "/ui-ux",
  },
  // {
  //   id: 3,
  //   title: "Mobile App Development",
  //   description:
  //     "One of our major goals is to harness the power of blockchain to revolutionize your business processes. Our expert blockchain developers create secure, transparent, and decentralized solutions that enhance trust and efficiency. From smart contracts to decentralized applications (DApps), we leverage blockchain technology to streamline operations, reduce costs, and provide unparalleled security.",
  //   link: "/app-development",
  // },
];
