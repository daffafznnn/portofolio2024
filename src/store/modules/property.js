const property = {
    namespaced: true,
    state: {    
     project: [
        {
            id: 1,
            img: "./src/assets/img/p1.png",
            title: "Vue.js",
            link: "https://portofolio-daffa.vercel.app/",
            name: "portofolio 2023",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?"
        },
        {
            id: 2,
            img: "./src/assets/img/p2.png",
            title: "Vue.js",
            link: "https://e-commerce-flame-theta.vercel.app/",
            name: "E-commerece",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?"
        },
        {
            id: 3,
            img: "https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg",
            title: "coming soon",
            link: "#",
            name: "unreleased",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?"
        }
     ],
     about: [
        {
            id: 1,
            img: "./src/assets/img/ab1.jpg"
        },
        {
            id: 2,
            img: "./src/assets/img/ab2.jpg"
        },
        {
            id: 3,
            img: "./src/assets/img/ab3.jpg"
        },
     ]
    },
    getters: {
        getProject: state => state.project,
        getAbout: state => state.about
    },
};

export default property;