const property = {
  namespaced: true,
  state: {
    stats: [
      {
        projects: 4,
        year: 2,
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
      {
        id: 3,
        img: "https://img.freepik.com/free-vector/coming-soon-text-grunge-background_91128-1643.jpg",
        title: "coming soon",
        link: "#",
        name: "unreleased",
        desc: "Project saya sudah lumayan banyak tapi sebagian belum saya rilis",
      },
    ],
    about: [
      {
        id: 1,
        img: "https://i.ibb.co/B2H24zC/ab1.jpg",
      },
      {
        id: 2,
        img: "https://i.ibb.co/3Bk2tBb/ab2.jpg",
      },
    ],
    textAbout: {
      text: "Nama lengkap saya Muhammad Daffa Fauzan, saya lahir pada tanggal 4 desember 2005 di bandung. Saya adalah anak pertama di keluarga saya, saya juga memiliki satu saudara laki-laki. ",
    },
  },
  getters: {
    getProject: (state) => state.project,
    getAbout: (state) => state.about,
    getStats: (state) => state.stats,
    getTextAbout: (state) => state.textAbout,
  },
};

export default property;
