new Vue({
    el: "#main",
    delimiters: ["[[", "]]"],
    data: {
        mobileMenu: false
    },
    methods: {
        triggerMenu: function() {
            document.body.classList.toggle("overflow-hidden");
            this.mobileMenu = !this.mobileMenu;
        }
    },
    mounted: function() {

    }
})
