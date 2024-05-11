<template>
  <div>
  <Navbar></Navbar>
  <Header></Header>
  <About></About>
  <Portofolio></Portofolio>
  <Stack></Stack>
  <Contact></Contact>
  <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import About from '../components/About.vue';
import Portofolio from "../components/Projects.vue";
import Contact from "../components/Contact.vue";
import Stack from "../components/Stack.vue";

export default{
 name: "GuestLayout",
 components:{
    Navbar,
    Header,
    Footer,
    About,
    Portofolio,
    Contact,
    Stack
 }
};
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
</style>
