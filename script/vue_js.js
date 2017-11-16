var app = new Vue({
    el: "#app",
    data: {
        works: '',
        selectedWork: '',
        image: [],
        img: [],
        selectedImages: [],
        isOpen: false
    },
    mounted: function() {
        this.getItems()
    },
    methods: {
        getItems: function() {
            var app = this
            var url = 'json/work.json'
                // var id = ''
                // var accessToken = '',
                // var newUrl = 'https://graph.facebook.com/' + id + '/picture?access_token=' + accessToken
            axios.get(url).then(function(response) {
                app.works = response.data.work
                    // console.log(response);
            })
        },
        toggleInfo: function(selectedWork) {
            var app = this
            app.selectedWork = selectedWork
            app.selectedImages = app.selectedWork.images.image
            console.log(selectedWork);
            this.slideAnimation();
        },
        // slide animation function
        slideAnimation: function() {
            this.isOpen = true
            $('body').css('overflow', 'hidden');
            $('.btn_close').fadeIn();
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
            this.isOpen = false
            $('.btn_close').fadeOut();
            // $('.modelbox').animate({
            //     marginLeft: '100%'
            // }, 300);
            $('body').removeAttr('style');
        }
    }
});