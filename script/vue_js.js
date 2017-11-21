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
        lead: `I am <span class="highlight"><span class="highlight--el"> Raghavendra S Diddimani.</span>
                </span><br/>A Front-end Developer based out in Bengaluru, Karnataka, INDIA.`,
        aboutShort: `<p class="animated  slideInRight">I build wesbite & UI out of the visual components. Using HTML, CSS and Javascript/jQuery, Develop
                            pixel perfect, responsive page across various platforms.</p>
                        <p class="animated  slideInRight">Currently I am working as
                            <span class="highlight">
                                <span class="highlight--el">
                                    <strong>Lead UI Developer</strong>
                                </span>
                            </span> at
                            <strong>Usha Martin Technologies</strong> check out my profile on
                            <a href="https://www.linkedin.com/in/raghavd17" target="_blank">linkedin</a>
                        </p>
                        <!-- <p>I create user interfaces, shape web page and ecommerce page.</p>-->
                        <p class="animated slideInUp ">
                            <a href="#" class="link-primary"> Checkout my recent works.. </a>
                        </p>`,
        seemore: 'See details &rarr;'
    },
    mounted: function() {
        this.getItems()
    },
    methods: {
        getItems: function() {
            var app = this
            var url = 'json/work.json'
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