const app = Vue.createApp({
    data() {
        return {
            message: 'Alert!!!!',
            inputValue: ''
        };
    },
    methods: {
        alertMessage() {
            alert(this.message);
        },
        onInputChange() {
            this.inputValue = event.target.value;
        }
    }    
});

app.mount('#assignment');