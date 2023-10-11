const property = {
    namespaced: true,
    state: {    
     project: [
        {
            id: 1,
            img: "./public/img/p1.png",
            title: "Vue.js",
            link: "https://portofolio-daffa.vercel.app/",
            name: "portofolio 2023",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?"
        },
        {
            id: 2,
            img: "./public/img/p2.png",
            title: "Vue.js",
            link: "https://e-commerce-flame-theta.vercel.app/",
            name: "E-commerece",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?"
        }
     ]
    },
    getters: {
        getProject: state => state.project
    },
};

export default property;