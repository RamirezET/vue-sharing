/**
 * Created by Ramirez on 12/13/2017.
 */

Vue.component('component-demo-comment', {
    template:
        '<div v-cloak>' +
        '</div>',
    props: ['itempricelist'],
    methods: {
        addCount: function (index) {
            this.itempricelist[index].isBuy++
        },
        reduceCount: function (index) {
            if (this.itempricelist[index].isBuy !== 1) {
                this.itempricelist[index].isBuy--
            }
        },
        removeItem: function (index) {
            this.itempricelist.splice(index, 1)
        }
    },
    computed: {
        totalPrice: function () {
            var totalPrice = 0;
            for (var i = 0; i < this.itempricelist.length; i++) {
                totalPrice += this.itempricelist[i].currentPrice * this.itempricelist[i].isBuy
            }
            return totalPrice
        }
    }
});