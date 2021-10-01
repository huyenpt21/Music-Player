/**
 * 1. Render songs -> checked
 * 2. Scroll to the bottom of the playlist -> checked
 * 3. Play / Pause / seeking
 * 4. CD rotated
 * 5. Next / Previous
 * 6. Random songs
 * 7. Next / Repeat when the song is ended
 * 8. Active song is playing
 * 9. Scoll active song into view
 * 10. Play song when clicked
 */

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const apps = {
    songs: [
        {
            name: '500 Miles',
            singer: 'Inside Llewyn Davis',
            path: './assets/music/500 Miles - Inside Llewyn Davis.mp3',
            image: './assets/images/500Miles.jpg'
        },
        {
            name: 'Already gone',
            singer: 'Sleeping At Last',
            path: './assets/music/Already Gone - Sleeping At Last.mp3',
            image: './assets/images/alreadyGone.jpg'
        },
        {
            name: 'At my worst',
            singer: 'Pink Sweat$',
            path: './assets/music/At My Worst - Pink Sweat$.mp3',
            image: './assets/images/atMyWorst.jpg'
        },
        {
            name: 'Chasing Cars',
            singer: 'Sleeping At Last',
            path: './assets/music/Chasing Cars - Sleeping at Last.mp3',
            image: './assets/images/chasingCars.jpg'
        },
        {
            name: 'Dnacing in the moon light',
            singer: 'Jubel',
            path: './assets/music/Dancing in the moonlight - Jubel.mp3',
            image: './assets/images/dancingInTheMoonLight.jpg'
        },
        {
            name: 'Of Monster And Men',
            singer: 'Sloom',
            path: './assets/music/Of Monsters And Men - Sloom.mp3',
            image: './assets/images/ofMonsterAndMen.jpg'
        },
        {
            name: 'Riptide',
            singer: 'Vance Joy',
            path: './assets/music/Riptide - Vance Joy.mp3',
            image: './assets/images/riptide.jpg'
        },
        {
            name: 'Stubborn Love',
            singer: 'The Lumineers',
            path: './assets/music/Stubborn Love - The Lumineers.mp3',
            image: './assets/images/stubbornLove.jpg'
        },
       
    ],

    render: function () {
        const htmls = this.songs.map(song => {
            return `
            <div class="song">
                <div class="thumb" style="background-image: url('${song.image}')"></div>
                <div class="song-body">
                    <h3 class="title">${song.name}</h3>
                    <p class="singer">${song.singer}</p>
                </div>
                <div class="song-option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        });
       $('.playlist').innerHTML = htmls.join('');
    },

    eventHandler: function () {
        const cd = $('.cd');
        const cdWidth = cd.offsetWidth;
        document.onscroll = function () {
            const scrollIndex = window.scrollY || document.documentElement.scrollTop;
            const newCDWidth = cdWidth - scrollIndex;
            cd.style.width = newCDWidth > 0 ? newCDWidth + 'px' : 0;
            cd.style.opacity = newCDWidth / cdWidth;
        }
    },

    start: function () {
        this.eventHandler();
        this.render();
    }
}

apps.start();
