/**
 * Created by Ramirez on 12/13/2017.
 */

Vue.component('component-demo-shopping-cart', {
    template: '<div id="shoppingCart" v-cloak>\n' +
    '    <div class="item" v-if="itempricelist.length">\n' +
    '        <table class="shopping-cart-table">\n' +
    '            <thead>\n' +
    '            <tr>\n' +
    '                <th>序号</th>\n' +
    '                <th>图片</th>\n' +
    '                <th>名称</th>\n' +
    '                <th>单价</th>\n' +
    '                <th>数量</th>\n' +
    '                <th>小计</th>\n' +
    '            </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '            <tr v-for="(itemList,index) in itempricelist ">\n' +
    '                <td>\n' +
    '                    <button @click="removeItem(index)">{{index+1}}</button>\n' +
    '                </td>\n' +
    '                <td class="item-pic">\n' +
    '                    <img :src=\'"https://img11.360buyimg.com/n2/"+itemList.productLogo\' alt="">\n' +
    '                </td>\n' +
    '                <td class="item-name">{{itemList.productName}}</td>\n' +
    '                <td>¥{{itemList.currentPrice}}</td>\n' +
    '                <td class="item-count">\n' +
    '                    <button @click="reduceCount(index)"\n' +
    '                            :disabled="itemList.isBuy==1">-\n' +
    '                    </button>\n' +
    '                    {{itemList.isBuy}}\n' +
    '                    <button @click="addCount(index)">+</button>\n' +
    '                </td>\n' +
    '                <td>¥{{itemList.isBuy*itemList.currentPrice}}</td>\n' +
    '            </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '        <div class="total-price">总价格：¥{{totalPrice}}</div>\n' +
    '    </div>\n' +
    '    <div class="empty-box" v-else>穷*！购物车里都没东西，跟咸鱼有什么分别！</div>\n' +
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