
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
        uid: '10',
        flag: true,
        papago: 'naver',
    },
    methods: {
        clickBtn() {
            console.log("hi");
        },
        newClickBtn() {
            this.uid++;
        },
        changeFlagBtn() {
            this.flag = !this.flag;
        }
    },
    watch: {
        uid: function(data) {
            console.log("uid 값이 바뀝니다 : ", data);
        }
    }
})