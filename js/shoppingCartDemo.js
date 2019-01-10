/**
 * Created by Ramirez on 12/6/2017.
 */

var vm = new Vue({
    el: '#shoppingCart',
    data: {
        itemPriceData: [],
        ifLoading:false
    },
    mounted() {
        this.ifLoading=true
        setTimeout(()=>{
            this.ifLoading=false
            this.itemPriceData=[{
                "productId": 3563660,
                "productName": "Apple AirPods 蓝牙无线耳机 MMEF2CH/A",
                "productLogo": "jfs/t3871/193/501637202/67656/c6725c75/58534587N53c62548.jpg",
                "followPrice": 1288.00,
                "isBuy": 2,
                "followedDate": 1512562868000,
                "currentPrice": 1288.00,
                "productState": "1"
            }, {
                "productId": 4995947,
                "productName": "Apple Watch Series 3智能手表（GPS款 38毫米 深空灰色铝金属表壳 黑色运动型表带 MQKV2CH/A）",
                "productLogo": "jfs/t8176/51/1356174970/135684/1d58299f/59b8d845N96efaf55.jpg",
                "followPrice": 2328.00,
                "isBuy": 1,
                "followedDate": 1512562860000,
                "currentPrice": 2328.00,
                "productState": "1"
            }, {
                "productId": 3498623,
                "productName": "索尼（SONY）KD-55X7000D 55英寸高清4K HDR 安卓6.0系统 智能液晶电视",
                "productLogo": "jfs/t7411/201/1244592544/202783/484878e5/599b92f5Nc93fd63d.jpg",
                "followPrice": 4999.00,
                "isBuy": 1,
                "followedDate": 1511700234000,
                "currentPrice": 4599.00,
                "productState": "4"
            }, {
                "productId": 10069341648,
                "productName": "Crucial 英睿达 美光 镁光 DDR4 8G 2400 笔记本电脑内存条 8G DDR4 2400笔记本内存条",
                "productLogo": "jfs/t11071/149/2328148053/387827/b5ce7db3/5a1654c0N5a8fcbe4.jpg",
                "followPrice": null,
                "isBuy": 3,
                "followedDate": 1511612352000,
                "currentPrice": 699.00,
                "productState": "1"
            }, {
                "productId": 4682807,
                "productName": "松下（Panasonic）SR-HCC107 5段IH电磁加热电饭煲 3.0L（对应日标1.0L）",
                "productLogo": "jfs/t5947/4/8512798076/205625/ed5386ca/59883b59Ne55e09da.jpg",
                "followPrice": null,
                "isBuy": 1,
                "followedDate": 1509121219000,
                "currentPrice": 4199.00,
                "productState": "1"
            }]
        },2000)

    },
    methods: {
        addCount: function (index) {
            this.itemPriceData[index].isBuy++
        },
        reduceCount: function (index) {
            if (this.itemPriceData[index].isBuy !== 1) {
                this.itemPriceData[index].isBuy--
            }
        },
        removeItem: function (index) {
            this.itemPriceData.splice(index, 1)
        }
    },
    computed: {
        totalPrice: function () {
            var totalPrice = 0;
            for (var i = 0; i < this.itemPriceData.length; i++) {
                totalPrice += this.itemPriceData[i].currentPrice * this.itemPriceData[i].isBuy
            }
            return totalPrice
        }
    }
});
