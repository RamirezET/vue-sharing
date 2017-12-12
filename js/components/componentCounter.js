/**
 * Created by Ramirez on 12/4/2017.
 */

Vue.component('my-counter', {
    template: '<button class="my-component-counter" @click="counter += 1">{{ counter }}</button>',
    data: function () {
        return {
            counter: 0
        }
    }
});