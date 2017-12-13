/**
 * Created by Ramirez on 12/4/2017.
 */
var vm = new Vue({
    el: '#demo',
    data: {
        msg: {'title': '我是父组件传来的', 'content': 'Me too.'},
        imsg: '打点字下面组件的内容也会变',
        itemPriceData: [{
            "productId": 3563660,
            "productName": "Apple AirPods 蓝牙无线耳机 MMEF2CH/A",
            "productLogo": "jfs/t3871/193/501637202/67656/c6725c75/58534587N53c62548.jpg",
            "followPrice": 1288.00,
            "isBuy": 2,
            "followedDate": 1512562868000,
            "currentPrice": 1288.00,
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
    },
    methods: {
        addShoppingItem: function () {
            this.itemPriceData = this.itemPriceData.concat(
                [{
                    "productId": 5696264,
                    "productName": "外星人Alienware17C-R2859S 17.3英寸眼球追踪游戏笔记本电脑(i7-7820HK 32G 1TSSD+1T GTX1080 8G独显 UHD)",
                    "productLogo": "jfs/t12058/120/547966496/132610/ac50c80b/5a0e5a07N18dee70e.jpg",
                    "followPrice": 35999.00,
                    "isBuy": 6,
                    "followedDate": 1513131821000,
                    "currentPrice": 35999.00,
                    "productState": "1"
                }, {
                    "productId": 4507814,
                    "productName": "微星（MSI）GT83VR 7RF-203CN 18.4英寸游戏本（i7-7920HQ 32G 512GBSSD+1T 双GTX1080 8G 机械键盘）黑",
                    "productLogo": "jfs/t11104/284/1548544227/218097/e19c0de3/5a03c8adN5bbe677c.jpg",
                    "followPrice": 39999.00,
                    "isBuy": 0,
                    "followedDate": 1513131820000,
                    "currentPrice": 39999.00,
                    "productState": "1"
                }, {
                    "productId": 5276690,
                    "productName": "三星（SAMSUNG）U32H850UMC 31.5英寸4K高分量子点技术液晶显示器",
                    "productLogo": "jfs/t5749/290/6953753935/110565/c66ebcd6/596d737cN895613ce.jpg",
                    "followPrice": 5999.00,
                    "isBuy": 3,
                    "followedDate": 1513131753000,
                    "currentPrice": 5999.00,
                    "productState": "1"
                }, {
                    "productId": 4335095,
                    "productName": "Apple MacBook Pro 15.4英寸笔记本电脑 银色（2017新款Multi-Touch Bar/Core i7/16GB/512GB MPTV2CH/A）",
                    "productLogo": "jfs/t6190/3/97815620/233404/57cee36b/59395b41Ndfad3416.jpg",
                    "followPrice": 22288.00,
                    "isBuy": 0,
                    "followedDate": 1513131614000,
                    "currentPrice": 22288.00,
                    "productState": "1"
                }, {
                    "productId": 3563660,
                    "productName": "Apple AirPods 蓝牙无线耳机 MMEF2CH/A",
                    "productLogo": "jfs/t3871/193/501637202/67656/c6725c75/58534587N53c62548.jpg",
                    "followPrice": 1288.00,
                    "isBuy": 1,
                    "followedDate": 1512562868000,
                    "currentPrice": 1288.00,
                    "productState": "1"
                }, {
                    "productId": 4995947,
                    "productName": "Apple Watch Series 3智能手表（GPS款 38毫米 深空灰色铝金属表壳 黑色运动型表带 MQKV2CH/A）",
                    "productLogo": "jfs/t8176/51/1356174970/135684/1d58299f/59b8d845N96efaf55.jpg",
                    "followPrice": 2328.00,
                    "isBuy": 0,
                    "followedDate": 1512562860000,
                    "currentPrice": 2328.00,
                    "productState": "1"
                }, {
                    "productId": 3498623,
                    "productName": "索尼（SONY）KD-55X7000D 55英寸高清4K HDR 安卓6.0系统 智能液晶电视",
                    "productLogo": "jfs/t7411/201/1244592544/202783/484878e5/599b92f5Nc93fd63d.jpg",
                    "followPrice": 4999.00,
                    "isBuy": 2,
                    "followedDate": 1511700234000,
                    "currentPrice": 4499.00,
                    "productState": "1"
                }, {
                    "productId": 10069341648,
                    "productName": "Crucial 英睿达 美光 镁光 DDR4 8G 2400 笔记本电脑内存条 8G DDR4 2400笔记本内存条",
                    "productLogo": "jfs/t14176/185/798642532/269710/8edbe3df/5a144989Nae0f8784.jpg",
                    "followPrice": null,
                    "isBuy": 4,
                    "followedDate": 1511612352000,
                    "currentPrice": 589.00,
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
                }])
        },
        reduceShoppingItem: function () {
            this.itemPriceData.splice(this.itemPriceData.length - 1, 1)
        }
    }
});
