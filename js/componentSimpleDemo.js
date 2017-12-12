/**
 * Created by Ramirez on 12/4/2017.
 */
var vm = new Vue({
    el: '#demo',
    data: {
        msg: {'title': '我是父组件传来的', 'content': 'Me too.'},
        imsg: '打点字下面组件的内容也会变'
    },
});
