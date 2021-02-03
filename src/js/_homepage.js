import {tns} from 'tiny-slider/src/tiny-slider'

window.addEventListener('load', () => {
    if(document.querySelector('.clients-and-partners-section')) {
        const client_btn = document.querySelector('#client_btn');
        const partners_btn = document.querySelector('#partners_btn');
        const clients = document.querySelector('#clients')
        const partners = document.querySelector('#partners')

        client_btn.addEventListener('click', (e) => {
            e.preventDefault()
            showClients()
        })

        partners_btn.addEventListener('click', (e) => {
            e.preventDefault()
            showPartners()
        })

        const showClients = () => {
            partners_btn.classList.remove('active')
            client_btn.classList.add('active')

            partners.classList.remove('active')
            clients.classList.add('active')
        }

        const showPartners = () => {
            client_btn.classList.remove('active')
            partners_btn.classList.add('active')

            clients.classList.remove('active')
            partners.classList.add('active')
        }

        showClients();

        const clientSlider = tns({
            container: '#clients',
            slideBy: 'page',
            items: 4,
            autoplay: true,
            autoplayHoverPause: true,
            controls: false,
            autoplayButtonOutput: false,
            nav: false,
        })

        const partnersSlider = tns({
            container: '#partners',
            slideBy: 'page',
            items: 4,
            autoplay: true,
            autoplayHoverPause: true,
            controls: false,
            autoplayButtonOutput: false,
            nav: false,
        })
    }
})
