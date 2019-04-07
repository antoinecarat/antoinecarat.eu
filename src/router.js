import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import DetailedAboutMe from "@/components/About/DetailedAboutMe";
import DetailedExperience from "@/components/Experience/DetailedExperience";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home, name: "Home" },
    { path: "/about", component: DetailedAboutMe, name: "DetailedAboutMe" },
    {
      path: "/experience/:id",
      component: DetailedExperience,
      name: "DetailedExperience"
    }
  ]
});
