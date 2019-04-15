/* eslint-disable */

const skillItems = [
  "Python",
  "JavaScript",
  "C/C++",
  "Java",
  "HTML/CSS",
  "Git",
  "Vue",
  "Dev-ops",
  "AWS/GCP",
  "Docker",
  "Kubernetes",
  "PWA",
  "Serverless",
  "TypeScript",
]

export const singlePage = {
  skills: {
    name: "skills/abilities",
    items: skillItems
  },
  education: {
    name: "education",
    details: [
      {
        title: "Simon Fraser University",
        location: "Vancouver",
        duration: "Sept. 2017 - Jun. 2020 (expected)",
        subTitle: "Bachelor's degree in Computer Science"
      },
      {
        title: "Zhejiang University",
        location: "Hangzhou",
        duration: "Sept. 2015 - Jun. 2017",
        subTitle: "Bachelor's degree in Computer Science"
      }
    ]
  },
  technicalExperience: {
    name: "Research and Work experience",
    details: [
      {
        link: "http://www.cs.sfu.ca/~tzwang/",
        title: "SFU System Group",
        duration: "Dec. 2018 - ",
        location: "Vancouver, SFU",
        subTitle: "Research Assistant",
        features: [
          "Adviced by <a class='inline-a' href='http://www.cs.sfu.ca/~tzwang'>Tianzheng Wang</a> to research on data-intensive systems and related topics that impacts the design of database systems, especially how persistent memory will impact the index design",
          "Implemented a fully-functional BzTree in C++ and benchmarked on both main memory and persistent memory",
          "Extended <a class='inline-a' href='https://github.com/HaoPatrick/pmwcas'>PMwCAS</a> by integrating the PMDK into it, allow the PMwCAS to have a safe allocator, and also extended its API so that PMwCAS can support more real world use cases"
        ]
      },
      {
        link: "http://www.cs.sfu.ca/~funt/",
        title: "SFU Colour Vision Group",
        duration: "Jan. 2018 - ",
        location: "Vancouver, SFU",
        subTitle: "Research Assistant",
        features: [
          "Adviced by <a class='inline-a' href='http://www.cs.sfu.ca/~funt'>Brian Funt</a> to research on colour constancy algorithms and related topics that help the colour constancy research.",
          "Publishing: <span style='font-weight: 600'>Xiangpeng Hao</span>, Brian Funt, Hanxiao Jiang \"*****\" (under review), Color Imaging Conference, 2019",
          "Publishing: <span style='font-weight: 600'>Xiangpeng Hao</span>, Brian Funt, \"*****\" (under review), IEEE Transactions on Image Processing, 2019"
        ]
      },
      {
        link: "https://www.demonware.net/",
        title: "Demonware",
        duration: "Sept. 2018 - Dec. 2018",
        location: "Vancouver",
        subTitle: "Software Engineer Intern",
        features: [
          "Worked in a team of 20+ engineers to develop online gaming backend service",
          "Maintained a tool to perform loadtest on Call Of Duty, used Docker and Kubernetes to scale the loadtest",
          "Developed a web application with 7k lines of code to visulize the loadtest"
        ]
      },
      {
        title: "Anniversary guide for Zhejiang University",
        link: "https://120.zjuqsc.com",
        duration: "April. 2017 - May. 2017",
        location: "Hangzhou",
        features: [
          "Led a team of 6 engineers that developed a web protal to celebrate the 120 anniversary of Zhejiang University",
          "Used a complex CDN and load balance strategy to manage thousands of requests per second"
        ]
      }
    ]
  },
  awardsAndScholarship: {
    name: "awards & scholarship",
    details: [
      {
        title: "SFU Entrance Scholarship",
        link: "https://www.sfu.ca/students/financialaid/entrance.html",
        features: [
          "Entrance award valued at $5000 for academically outstanding students for the first two years study in Zhejiang University"
        ]
      },
      {
        title: "VEX Robotics Competition",
        linke: "https://www.vexrobotics.com/vexedr/competition",
        features: [
          "Led a team of 8 members, capital of provincial VEX team",
          "Won the gold medal (2nd place) in the National VEX Competition (China), 2015",
          "Won the 3rd place in VRC Programming Skills Challenge in VEX world championship 2015"
        ]
      }
    ]
  }
};

export const doublePage = {
  skills: {
    name: "skills/abilities",
    items: skillItems
  },
  education: {
    name: "education",
    details: [
      {
        title: "Simon Fraser University",
        location: "Vancouver",
        duration: "Sept. 2017 - Jun. 2020 (expected)",
        subTitle: "Bachelor's degree in Computer Science"
      },
      {
        title: "Zhejiang University",
        location: "Hangzhou",
        duration: "Sept. 2015 - Jun. 2017",
        subTitle: "Bachelor's degree in Computer Science"
      }
    ]
  },
  technicalExperience: {
    name: "technical work experience",
    details: [
      {
        link: "https://www.demonware.net/",
        title: "Demonware",
        duration: "Sept. 2018 - Dec. 2018",
        location: "Vancouver",
        subTitle: "Software Engineer Intern",
        features: [
          "Worked in a team of 20+ engineers to develop online gaming backend service",
          "Maintained a tool to perform loadtest on Call Of Duty, used Docker and Kubernetes to scale the loadtest",
          "Developed a complex web application with 7k lines of code to visulize the loadtest"
        ]
      },
      {
        link: "https://houaa.xyz",
        title: "Houaa Education",
        duration: "Jan. 2016 - Aug. 2017",
        location: "Hangzhou",
        subTitle: "Co-founder",
        features: [
          "Led a group of 11, including engineers, project managers and designers to develop an education sharing platform " +
          "which establishes the connection between students and tutors",
          "Built the frontend based on fresh web technologies including PWA, Serverless, SPA, modern CSS etc. ",
          "Implemented the dev-ops automation toolkit including testing, deploying and dispatching our app"
        ]
      }
    ]
  },
  selectedProjects: {
    name: "selected personal projects",
    details: [
      {
        title: "My Website",
        link: "https://me.haoxp.xyz",
        location: "Vancouver",
        features: [
          "Developed the website to experiment most of my crazy ideas including WebGL, WebAssembly, GraphQL, PWA, SSR, Serverless, HSTS, Deep Learning etc.",
          "Used vue.js as frontend framework and firebase as the serverless backend, integrated deep learning and WebAssembly to discover a new way of demonstrating",
          "Demonstrating my ideas, photographs and resume in a geek way"
        ]
      },
      {
        title: "Telegram Channel Bot",
        link: "https://t.me/newsathlh",
        location: "Vancouver",
        features: [
          "Use Python to write a news, weather data provider, deployed on a raspberry pi",
          "Designed a machine learning algorithm by myself",
          "Use Python to drive the sensors installed on IoT devices"
        ]
      },
      {
        title: "Anniversary guide for Zhejiang University",
        link: "https://120.zjuqsc.com",
        location: "Hangzhou",
        features: [
          "Developed a web protal to celebrate Zhejiang University's 120 anniversary year",
          "In charge of the whole developing team, including coordinating with volunteer work",
          "Used CDN and load balance to serve thousands of requests per second"
        ]
      },
      {
        title: "Web Printer",
        link: "https://github.com/HaoPatrick/WebPrinter",
        location: "Vancouver",
        features: [
          "Used Python to drive the old printer which does not have network printing",
          "Developed a nice user interface and print from anywhere on the Internet"
        ]
      },
      {
        title: "NBA Draft Crawler",
        link: "https://github.com/HaoPatrick/NBA_draft_crawler",
        location: "Vancouver",
        features: [
          "Wrote a Python script to crawl the NBA draft data for research use",
          "Worked on beautiful soup and requests library to parse HTML and send requests, used regex expressions to handle dirty formatted content."
        ]
      }
    ]
  },
  additionalExperience: {
    name: "additional experience",
    details: [
      {
        title: "Research Assistant",
        duration: "Jan. 2018 - PRESENT",
        location: "Vancouver",
        subTitle: "Computer Vision Lab at SFU",
        features: ["Research on Colorization and other color related CV work"]
      },
      {
        title: "Research Assistant",
        duration: "Sept. 2017 - Jan. 2018",
        location: "Vancouver",
        subTitle: "Computer Logic Lab at SFU",
        features: [
          "Crawl data from various open datasets",
          "Analyze and visualize the sports data from NBA and NHL, predict the players performance based on their history data",
          "Build various tools and scripts to automatically manage and visualize the research results"
        ]
      }
    ]
  },
  openSourceContributions: {
    name: "Open Source Contributions",
    details: [
      {
        title: "UPass-Script",
        location: "Vancouver",
        link: "https://github.com/Armour/UPass-Script",
        features: [
          "Automatically request UPass each month",
          "Added the feature of IFTTT notification"
        ]
      },
      {
        title: "flask-graphql",
        link: "https://github.com/graphql-python/flask-graphql/pull/39",
        location: "Vancouver",
        features: [
          "a flask integration for GraphQL",
          "fixed a test error by changing the unit test to latest graphene api"
        ]
      },
      {
        title: "bsbang-crawler",
        location: "Vancouver",
        link: "https://github.com/justinccdev/bsbang-crawler",
        features: [
          "The crawler component of Buzzbang search (a google-like search engine) which allows biologists to search gene data without pain",
          "Added continous integration of the crawler",
          "Discussed a lot about the technical detailes and addressed a few bugs"
        ]
      },
      {
        title: "zju-icicles",
        location: "Vancouver",
        link: "https://github.com/QSCTech/zju-icicles",
        features: [
          "Course info sharing in Zhejiang University",
          "Role: Co-maintainer"
        ]
      }
    ]
  },
  awardsAndScholarship: {
    name: "awards & scholarship",
    details: [
      {
        title: "SFU Entrance Scholarship",
        link: "https://www.sfu.ca/students/financialaid/entrance.html",
        features: [
          "Entrance award valued at $5000 for academically outstanding students for the first two years study in Zhejiang University"
        ]
      },
      {
        title: "Mountain Madness Hackathon",
        link: "",
        features: [
          "Won best mobile app among all 10+ competitors",
          "Built an mobile app which gathers weather info from sensors installed among the mountains"
        ]
      }
    ]
  }
};
