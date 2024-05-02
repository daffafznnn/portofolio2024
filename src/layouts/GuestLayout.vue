<template>
 <Navbar></Navbar>
  <Header></Header>
  <Portofolio></Portofolio>
  <About></About>
  <Contact></Contact>
  <!-- <Prank></Prank> -->
  <Footer></Footer>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import About from '../components/About.vue';
// import Prank from "../components/Prank.vue";
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