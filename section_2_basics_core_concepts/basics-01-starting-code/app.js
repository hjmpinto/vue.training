const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Goal A',
            courseGoalB: 'Goal B',
            courseGoalC: '<h2>Goal C</h2>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');