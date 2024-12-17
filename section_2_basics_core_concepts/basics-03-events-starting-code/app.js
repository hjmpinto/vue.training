const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmedInput() {
      this.confirmedName = this.name;
    },
    submitForm (event){
      //event.preventDefault(); // prevent browser to reload page on submit vanilla js way
      alert('Submitted!');
    },
    setName (event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    onAdd() {
      this.counter++;
    },
    onReduce () {
      this.counter--;
    },
    onAddNum(num) {
      this.counter += num;
    },
    onReduceNum(num) {
      this.counter -= num;
    }
  }
});

app.mount('#events');
