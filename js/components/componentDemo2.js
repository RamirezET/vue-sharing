/**
 * Created by Ramirez on 12/12/2017.
 */

Vue.component('component-demo-two', {
    template: '<div><h1>{{message.title}}</h1><p>{{message.content}}</p><p>{{imsg}}</p></div>',
    props: ['message', 'imsg']
});