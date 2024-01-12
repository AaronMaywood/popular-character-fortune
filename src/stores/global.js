import data from "@/assets/data.json";
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { calcBirthNumber } from "@/util";

export const useGlobalStore = defineStore("global", () => {
	const base_url = ref("http://cf161188.cloudfree.jp/nenga/");
	const year = ref(2023);
	const GA4_ID = ref("G-GGQJL18WKL"); // index.htmlのGoogle tagで使用されているものと同じ値を設定

	const database = ref(data);

	// @/components/Enter.vue で使用する、誕生日入力欄 ... storeに持たせることにより、画面間を遷移しても値は保たれる
	const birth_year = ref("");
	const birth_month = ref("1");
	const birth_day = ref("1");
	const birthNumber = computed(() => {
		return calcBirthNumber(
			birth_year.value,
			birth_month.value,
			birth_day.value
		);
	});

	return {
		base_url,
		year,
		GA4_ID,
		database,
		birth_year,
		birth_month,
		birth_day,
		birthNumber,
	};
});
