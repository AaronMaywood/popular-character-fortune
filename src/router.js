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
		// 本来ならステータスコードも404にすべきであるが、フロントエンドではできない
		// https://stackoverflow.com/questions/62169022/how-do-i-change-status-code-with-vue-router
		// https://www.reddit.com/r/vuejs/comments/53xuxu/help_set_status_code_404_in_vuerouter/
		// →対策として、サーバー側の404ページにリダイレクトする方法があるが、そこまではしない
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
