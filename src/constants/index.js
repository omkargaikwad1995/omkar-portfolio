import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    comsense,
    glovve,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    award,
    socialgram,
    sagarbabar,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
      icon: backend,
    },
    {
      title: "MERN Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Javascript Developer",
      company_name: "Glovve Portal LLP",
      icon: glovve,
      iconBg: "#383E56",
      date: "September 2019 - July 2021",
      points: [
        "Integrated third-party APIs including payment gateways and social media.",
        "Designed multiple email templates for marketing and user communication.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Tech Stack: React.js, Material-UI, RESTful APIs"
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Comsense Technologies Pvt Ltd",
      icon: comsense,
      iconBg: "#E6DEDD",
      date: "September 2022 - Present",
      points: [
        "Develop and maintain full-stack web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
        "Designed and implemented Redis caching strategy, reducing database load by 30 Percent.",
        "Built proxy IP pool system with automatic rotation and health checking.",
        "Tech Stack: Node.js, Express.js, React.js, Redis, RabbitMQ, AWS RDS, Supabase, Tailwind.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Comsense Technologies Pvt Ltd",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "September 2022 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "SocialGram",
      description:
        "Developed a social web application similar to instagram.For backend implemented appwrite which provide authentication system and structurised database",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "appwrite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: socialgram,
      source_code_link: "https://github.com/omkargaikwad1995/socialgram",
    },
    {
      name: "SagarBabar",
      description:
        "Created a fully responsive portfolio website using React.js, Tailwind CSS, and Framer Motion.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "emailjs",
          color: "pink-text-gradient",
        },
      ],
      image: sagarbabar,
      source_code_link: "https://sagar-babar.vercel.app/",
    },
    {
      name: "happydemo",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };