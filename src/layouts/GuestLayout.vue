<template>
 <Navbar></Navbar>
  <Header></Header>
  <Portofolio></Portofolio>
  <About></About>
  <Contact></Contact>
  <Footer></Footer>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import About from '../components/About.vue';
import Portofolio from "../components/Portofolio.vue";
import Contact from "../components/Contact.vue";

export default{
 name: "GuestLayout",
 components:{
    Navbar,
    Header,
    Footer,
    About,
    Portofolio,
    Contact
 }
};
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
</style>
