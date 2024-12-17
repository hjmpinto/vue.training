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
			console.log(this.counter);
			
			if (this.counter < 37) {
				return "Not there yet";
			} 
			if (this.counter === 37) {
				return this.counter;
			}

			if (this.counter > 37){
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