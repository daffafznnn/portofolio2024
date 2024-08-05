<template>
  <div>
  <Navbar></Navbar>
  <Header></Header>
  <About></About>
  <Stack></Stack>
  <projects></projects>
  <Contact></Contact>
  <Footer></Footer>
  <AnimationBg></AnimationBg>
  <!-- <Cookie></Cookie> -->
  </div>
</template>
<script>
import Navbar from "../components/main/Navbar.vue";
import Header from '../components/main/Header.vue';
import Footer from '../components/main/Footer.vue';
import About from '../components/main/About.vue';
import projects from "../components/main/Projects.vue";
import Contact from "../components/main/Contact.vue";
import Stack from "../components/main/Stack.vue";
import Cookie from "../components/stage/Cookie.vue";
import AnimationBg from "../components/AnimationBg.vue";


export default{
 name: "GuestLayout",
 components:{
    Navbar,
    Header,
    Footer,
    About,
    projects,
    Contact,
    Stack,
    Cookie,
    AnimationBg
 }
};
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
</style>
