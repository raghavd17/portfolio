/*! lilpop - v1.0.0 - 2017-11-30
* http://homepage.com
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
        hello: 'Namasthe, ',
        seemore: 'See details &rarr;',
        footer_copy: '© Raghavendra S Diddimani - Made with Vue.js ',
        email: 'raghavd17@gmail.com',
        cell: '9845057300'
        
    },
    mounted: function() {
        this.getWorks();
            // this.getinfo()
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
            console.log(selectedWork);
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
            $('body').removeAttr('style');
        }
    }
});