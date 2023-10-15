const property = {
    namespaced: true,
    state: {    
     project: [
        {
            id: 1,
            img: "p1.png",
            title: "Vue.js",
            link: "https://portofolio-daffa.vercel.app/",
            name: "portofolio 2023",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?"
        },
        {
            id: 2,
            img: "p2.png",
            title: "Vue.js",
            link: "https://e-commerce-flame-theta.vercel.app/",
            name: "E-commerece",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?"
        },
        {
            id: 3,
            img: "cm.png",
            title: "coming soon",
            link: "#",
            name: "unreleased",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?"
        }
     ],
     about: [
        {
            id: 1,
            img: "ab1.jpg"
        },
        {
            id: 2,
            img: "ab2.jpg"
        },
     ]
    },
    getters: {
        getProject: state => state.project,
        getAbout: state => state.about
    },
};

export default property;