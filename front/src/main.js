// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import './styles.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  data: {
    json: {}
  },
  created() {
    fetch("../static/names.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => (this.json = data));
  },
  methods: {
    sortAlphabetically: function() {
      this.json.names.sort(function(a, b) {
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
    },
    sortByAmount: function() {
      this.json.names.sort(function (a, b) {
        return b.amount - a.amount;
      });
    },
    returnTotal: function() {
      let total = 0;
      this.json.names.forEach(function (item) {
        total = total + item.amount;
      });
      alert(total);
    },
    returnAmount: function(e) {
      const input = e.target.value.toLowerCase();
      this.json.names.map(item => {
        item.name.toLowerCase() === input ? alert(item.amount) : console.log('ei');
      })
    }
  }
});
