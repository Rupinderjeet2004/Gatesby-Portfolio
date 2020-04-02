const siteMetadata = {
    title: `Rajvir Kaur`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: true,
    logo: `/images/R.png`,
    icon: `/images/R.png`,
    titleImage: `/images/wall.jpg`,
    introTag: `Business – Marketing`,
    description: `The main objective of my life is to reduce the world hunger, this is kind a long-term goal of my life.
     I am fond of learning more about Marketing field to get more experience and skills about it to get an appropriate job. 
    Then I would like to open my own business to earn more money so that I can raise funds for charity for needy people to satisfy one of their basic necessities and it is “food”.`,
    author: `@rajvirKaur`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio"
        },
        {
            name: "BLOG",
            url: "/blog"
        },
        {
            name: "ABOUT",
            url: "/about"
        },
        {
            name: "CONTACT",
            url: "/contact"
        }
    ],
    footerLinks: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/rajvir-kaur-1086b11a0/"
        }
    ],
    social: [
        {
            name: "LinkedIn",
            icon: "/images/LinkedIn.svg",
            url: "https://www.linkedin.com/in/rajvir-kaur-1086b11a0/"
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/rajveer_._kaur"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "./test.json",
        description: `Pop me a message!`,
        mail: "RKAUR52015201@gmail.com",
        phone: "437-988-5201",
        address: "115 Dunsmore Lane \nBarrie, ON \nL4M 6Z4"
    }
    // this is optional. you can uncomment this if you use disqus
    // disqus: `your-disqus-shortname`
};

const plugins = [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                "gatsby-remark-copy-linked-files",
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 1280
                    }
                }
            ]
        }
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `contents`,
            path: `${__dirname}/contents/`
        }
    },
    {
        resolve: `gatsby-plugin-less`,
        options: {
            strictMath: true
        }
    },
]

if(siteMetadata.disqus) {
    plugins.push({
        resolve: `gatsby-plugin-disqus`,
        options: {
          shortname: siteMetadata.disqus
        }
    })
}

module.exports = {
    siteMetadata: siteMetadata,
    plugins: plugins
};
