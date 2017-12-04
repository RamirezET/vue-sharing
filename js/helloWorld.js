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

//------------------------------------------------------------------------------------------------------------------------
function changeFuture() {
    document.getElementById('helloTxt').innerHTML = 'Future';
    document.getElementById('myHeaderInput').value = 'Future';
}

function changeWorld() {
    document.getElementById('myHeader').innerHTML = document.getElementById('myHeaderInput').value;

}