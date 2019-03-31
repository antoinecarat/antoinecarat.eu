import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import DetailedExperience from "@/components/Experience/DetailedExperience";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home, name: "Home" },
    {
      path: "/experience/:id",
      component: DetailedExperience,
      name: "DetailedExperience"
    }
  ]
});
