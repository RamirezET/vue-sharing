/**
 * Created by Ramirez on 12/13/2017.
 */

Vue.component('component-demo-comment', {
    template: '<div id="shoppingCart" v-cloak>' +
    '    <div class="item" v-if="itempricelist.length">' +
    '        <table class="shopping-cart-table">' +
    '            <thead>' +
    '            <tr>' +
    '                <th>序号</th>' +
    '                <th>图片</th>' +
    '                <th>名称</th>' +
    '                <th>单价</th>' +
    '                <th>数量</th>' +
    '                <th>小计</th>' +
    '            </tr>' +
    '            </thead>' +
    '            <tbody>' +
    '            <tr v-for="(itemList,index) in itempricelist ">' +
    '                <td>' +
    '                    <button @click="removeItem(index)">{{index+1}}</button>' +
    '                </td>' +
    '                <td class="item-pic">' +
    '                    <img :src=\'"https://img11.360buyimg.com/n2/"+itemList.productLogo\' alt="">' +
    '                </td>' +
    '                <td class="item-name">{{itemList.productName}}</td>' +
    '                <td>¥{{itemList.currentPrice}}</td>' +
    '                <td class="item-count">' +
    '                    <button @click="reduceCount(index)"' +
    '                            :disabled="itemList.isBuy==1">-' +
    '                    </button>' +
    '                    {{itemList.isBuy}}' +
    '                    <button @click="addCount(index)">+</button>' +
    '                </td>' +
    '                <td>¥{{itemList.isBuy*itemList.currentPrice}}</td>' +
    '            </tr>' +
    '            </tbody>' +
    '        </table>' +
    '        <div class="total-price">总价格：¥{{totalPrice}}</div>' +
    '    </div>' +
    '    <div class="empty-box" v-else>穷*！购物车里都没东西，跟咸鱼有什么分别！</div>' +
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