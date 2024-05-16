const property = {
  namespaced: true,
  state: {
    stats: [
      {
        projectCount: 0, // Tambahkan properti projectCount di dalam stats
        year: 3,
        achievement: 0,
      }
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
  },
  getters: {
    getProject: (state) => state.project,
    getStats: (state) => state.stats,
  },
  actions: {
    
  },
  mutations: {
    
  }
};

export default property;