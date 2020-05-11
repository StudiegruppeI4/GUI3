import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/Login.vue")
  },
  {
    path: "/manager",
    name: "Manager",
    component: () =>
      import("../views/Manager.vue")
  },
  {
    path: "/manager/registermodel",
    name: "RegisterModel",
    component: () =>
      import("../components/RegisterModel.vue")
  },
  {
    path: "/manager/registermanager",
    name: "RegisterManager",
    component: () =>
      import("../components/RegisterManager.vue")
  },
  {
    path: "/manager/registerjob",
    name: "RegisterJob",
    component: () =>
      import("../components/RegisterJob.vue")
  },
  {
    path: "/manager/managemodels",
    name: "ManageModels",
    component: () =>
      import("../components/ManageModels.vue")
  },
  {
    path: "/manager/managemanagers",
    name: "ManageManagers",
    component: () =>
      import("../components/ManageManagers.vue")
  },
  {
    path: "/manager/jobs",
    name: "Jobs",
    component: () =>
      import("../views/Jobs.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
