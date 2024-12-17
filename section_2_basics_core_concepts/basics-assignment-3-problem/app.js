const app = Vue.createApp({
	data() {
		return {
			counter: 0
		}
	},
	watch: {
		counter(value) {
			if (value > 37) {
				const that = this;
				setTimeout(function () {
					that.counter = 0;
				}, 3000);
			}
		}
	},
	computed: {
		result() {
			if (this.counter <= 37) {
				return "Not there yet";
			} else {
				return "Too much!";
			}
		}
	},
	methods: {
		onAdd(num) {
			this.counter += num;
		}
	}

});

app.mount("#assignment")