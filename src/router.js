import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Result from "@/pages/Result.vue";
import NotFound from "@/pages/404NotFound.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/result/:birthNumber",
		name: "Result",
		component: Result,
	},
	{
		// https://router.vuejs.org/guide/essentials/dynamic-matching.html#Catch-all-404-Not-found-Route
		path: "/:pathMatch(.*)",
		name: "404NotFound",
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
