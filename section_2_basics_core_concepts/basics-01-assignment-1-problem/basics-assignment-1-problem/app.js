const app = Vue.createApp({
    data () {
        return {
            name: 'Helder',
            age: 26,
            imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQl5hBT8qhrUwFo-0_pDvoLVXeH99hGtEgMmX4GsUkudzNwXUM8gR9HRwpijCZgDYFSgDJITc3i-MZtJvEjaWYhn1hJT9hEU3V5gVjcVw'
        }
    },
    methods: {
        outputAge () {
            return this.age + 5;
        },
        favouriteNumber() {
            return Math.random();
        },
        outputImage(){
            return this.imageUrl;
        },
        outputInputValue() {
            return this.name;
        }
    }
});

app.mount('#assignment')