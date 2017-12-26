/**
 * Created by Ramirez on 12/23/2017.
 */
Vue.component('input-number', {
    template: '<div class="input-number"><input type="number" :value="currentValue" @change="handleChange"><button @click="handleDown" :disabled="currentValue<=min">-</button><button @click="handleUp" :disabled="currentValue>=max">+</button></div>',
    props: {
        max: {
            type: Number,
            default: Infinity
        },
        min: {
            type: Number,
            default: -Infinity
        },
        value: {
            type: Number,
            default: 0
        }
    },
    data: function () {
        return {
            currentValue: this.value
        }
    },
    watch: {
        currentValue: function (val) {
            this.$emit('input', val);
            this.$emit('on-change', val)
        },
        value: function (val) {

            this.updateValue(Number(val));
        }
    },
    methods: {
        updateValue: function (val) {
            if (val > this.max) {
                val = this.max
            } else if (val < this.min) {
                val = this.min
            }
            this.currentValue = val;
        },
        handleChange: function (event) {
            var val = event.target.value.trim();
            var min = this.min;
            var max = this.max;
            this.currentValue = val;
            if (val > max) {
                this.currentValue = max;
            } else if (val < min) {
                this.currentValue = min();
            }
        },
        handleDown: function () {
            if (this.currentValue <= this.min) {
                return
            } else {
                this.currentValue--;
            }
        },
        handleUp: function () {
            if (this.currentValue >= this.max) {
                return
            } else {
                this.currentValue++;
            }
        }
    },
    mounted: function () {
        this.updateValue(this.value)
    }
});