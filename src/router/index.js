import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AllQuotes from "../views/AllQuotes.vue";
import SpecificQuote from "../views/SpecificQuote.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/all",
      name: "all-quotes",
      component: AllQuotes,
    },
    {
      path: "/quote/:id",
      name: "single-quote",
      component: SpecificQuote,
    },
  ],
});

export default router;
