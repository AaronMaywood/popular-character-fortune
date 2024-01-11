<script setup>
import { ref } from "vue";
import { isValidDateFormat } from "@/util";
import { useGlobalStore } from "@/stores/global";

const store = useGlobalStore();
const emit = defineEmits(["go-fortune"]);

const errorMessage = ref("");

function onSubmit(e) {
	// .padStart() は 0埋めするのに使用
	// See:
	// https://gray-code.com/javascript/fill-numbers-with-zeros/
	const isValid = isValidDateFormat(
		`${store.birth_year}-${store.birth_month.toString().padStart(2, "0")}-${store.birth_day
			.toString()
			.padStart(2, "0")}`
	);
	if (!isValid) {
		errorMessage.value = "正しい日付を入力して下さい";
	} else {
		errorMessage.value = "";
		// 占い結果に遷移
		emit("go-fortune", {
			year: store.birth_year,
			month: store.birth_month,
			day: store.birth_day,
		});
	}
}
</script>

<template>
	<p v-show="errorMessage" class="errorMessage">{{ errorMessage }}</p>
	<form class="mb10" @submit.prevent="onSubmit">
		<p class="mb15">
			<input
				required="required"
				type="text"
				v-model="store.birth_year"
				name="year"
				class="form-flam01"
				placeholder="西暦4桁 例)1970"
				pattern="\d{4}"
			/>
			年
		</p>
		<p class="mb15">
			<select
				required="required"
				v-model="store.birth_month"
				name="month"
				class="form-flam02"
			>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
				<option value="11">11</option>
				<option value="12">12</option>
			</select>
			月
		</p>
		<p>
			<select required="required" v-model="store.birth_day" name="day" class="form-flam02">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
				<option value="11">11</option>
				<option value="12">12</option>
				<option value="13">13</option>
				<option value="14">14</option>
				<option value="15">15</option>
				<option value="16">16</option>
				<option value="17">17</option>
				<option value="18">18</option>
				<option value="19">19</option>
				<option value="20">20</option>
				<option value="21">21</option>
				<option value="22">22</option>
				<option value="23">23</option>
				<option value="24">24</option>
				<option value="25">25</option>
				<option value="26">26</option>
				<option value="27">27</option>
				<option value="28">28</option>
				<option value="29">29</option>
				<option value="30">30</option>
				<option value="31">31</option>
			</select>
			日
		</p>
		<button type="submit">
			<img src="/images/btn_img01.png" alt="占う" class="btn-uranau" />
		</button>
	</form>
</template>
