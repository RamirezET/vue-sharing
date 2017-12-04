var vm = new Vue({
    el: '#demo',
    data: {
        msg: 'Vue.js!'
    },
    methods: {
        helloFuture: function () {
            this.msg = 'Future';
        }
    }
})