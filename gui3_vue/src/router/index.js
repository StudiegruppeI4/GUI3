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
      import("../components/Jobs.vue")
  },
  {
    path: "/manager/jobs/:id",
    name: "EditJob",
    component: () =>
      import("../components/EditJob.vue")
  },
  {
    path: "/model",
    name:"model",
    component:()=>
      import("../views/Model.vue")
  },
  {
    path: "/model/viewJobs",
    name:"Model Jobs",
    component:()=>
      import("../components/ModelJobs.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
