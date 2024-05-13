const property = {
  namespaced: true,
  state: {
    stats: [
      {
        projects: 4,
        year: 3,
        achievement: 0,
      },
    ],
    project: [
      {
        id: 1,
        img: "https://i.ibb.co/DbJgSrh/p1.png",
        title: "Vue.js",
        link: "https://portofolio-daffa.vercel.app/",
        name: "portofolio 2023",
        desc: "Ini Web Portofolio saya di tahun 2023, karena waktu itu saya masih belajar membuat frontend menggunakan vue.js",
      },
      {
        id: 2,
        img: "https://i.ibb.co/G7DtJQ4/p2.png",
        title: "Vue.js",
        link: "https://e-commerce-flame-theta.vercel.app/",
        name: "E-commerece",
        desc: "Ini Project E-commerce pertama saya, waktu saya masih Prakerin di sekolah dan sudah di presentasikan saat sidang pkl di sekolah",
      },
    ],
    about: [
      {
        id: 1,
        img: "https://i.ibb.co/SwZw8Np/ab1.jpg",
      },
      {
        id: 2,
        img: "https://i.ibb.co/kJvYgFV/ab2.jpg",
      },
    ],
  },
  getters: {
    getProject: (state) => state.project,
    getAbout: (state) => state.about,
    getStats: (state) => state.stats,
    getTextAbout: (state) => state.textAbout,
  },
};

export default property;
