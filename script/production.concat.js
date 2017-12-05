/*! raghavsd.bitbucket.io - v1.0.0 - 2017-12-05
* raghavsd.bitbucket.io
* Copyright (c) 2017 ; Licensed  */
var app = new Vue({
    el: "#app",
    data: {
        works: '',
        selectedWork: '',
        image: [],
        img: [],
        selectedImages: [],
        isOpen: false,
        isIE: false,
        hello: 'Namasthe,',
        seemore: 'See details &rarr;',
        footer_copy: '© Raghavendra S Diddimani - Made with Vue.js ',
        email: 'raghavd17@gmail.com',
        cell: '9845057300',
        ie_heading: " Oop's ",
        ie_message: " This browser doesn't support CSS Grid, <br /> try opening in other than IE Browsers "
    },
    mounted: function() {
        this.getWorks();
        // this.getinfo()
        this.detectBrowser();

    },
    methods: {
        getWorks: function() {
            var app = this;
            var url = 'json/work.json';
            axios.get(url).then(function(response) {
                app.works = response.data.work;
                console.log(app.works);
            });
        },
        // getinfo: function() {
        //     var info = this
        //     var url = 'json/info.json'
        //     axios.get(url).then(function(response) {
        //         info.myinfo = response.data
        //         console.log(info.myinfo);
        //     })

        // },
        toggleInfo: function(selectedWork) {
            var app = this;
            app.selectedWork = selectedWork;
            app.selectedImages = app.selectedWork.images.image;
            //console.log(selectedWork);
            this.slideAnimation();
        },
        // slide animation function
        slideAnimation: function() {
            this.isOpen = true;
            $('body').css('overflow', 'hidden');
            // $('.btn_close').fadeIn();
            $(".modelbox").scrollTop(0);
            // $('.modelbox').animate({
            //     marginLeft: '0'
            // }, 300, function() {
            //     $('body').css('overflow', 'hidden');
            //     $('.btn_close').fadeIn();
            //     $(".modelbox").scrollTop(0);
            // });
        },
        // slideAnimation
        // close btn function
        btn_close: function() {
            this.isOpen = false;
            // $('.btn_close').fadeOut();
            // $('.modelbox').animate({
            //     marginLeft: '100%'
            // }, 300);
            //$('body').removeAttr('style');
        },
        detectBrowser: function() {
            this.isIE = false;
            // Opera 8.0+
            var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

            // Firefox 1.0+
            var isFirefox = typeof InstallTrigger !== 'undefined';

         
            // Internet Explorer 6-11
            var isIE = /*@cc_on!@*/ false || !!document.documentMode;

            // Edge 20+
            var isEdge = !isIE && !!window.StyleMedia;

            // Chrome 1+
            var isChrome = !!window.chrome && !!window.chrome.webstore;

            // Blink engine detection
            var isBlink = (isChrome || isOpera) && !!window.CSS;

            if (isIE || isEdge) {
                this.isIE = true;
            } else {
                this.isIE = false;
            }

        }
    }
});