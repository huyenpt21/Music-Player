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

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const cd = $('.cd');
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');
const player = $('.player');

const app = {
    currentIndex: 0,
    isPlaying: false,
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

    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex]
            }
        })
    },

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
        //scroll playlist
        const cdWidth = cd.offsetWidth;
        document.onscroll = function () {
            const scrollIndex = window.scrollY || document.documentElement.scrollTop;
            const newCDWidth = cdWidth - scrollIndex;
            cd.style.width = newCDWidth > 0 ? newCDWidth + 'px' : 0;
            cd.style.opacity = newCDWidth / cdWidth;
        }
        
        //click the play button
        const _this = this;//this: app
        playBtn.onclick = function () {
            //if use 'this.' in here, it's mean playBtn
            //if want call app's properties -> use 'app.' or '_this.'
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        }

        //When the player is pausing
        audio.onpause = function () {
            _this.isPlaying = false;
            audio.pause();
            player.classList.remove('playing');
            console.log(_this.isPlaying);

        }

        //when the player is playing
        audio.onplay = function () {
            _this.isPlaying = true;
            audio.play();
            player.classList.add('playing');
            console.log(_this.isPlaying);
        }
    },

    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url(${this.currentSong.image})`;
        audio.src = this.currentSong.path;
    },

    start: function () {
        this.defineProperties();
        this.eventHandler();
        this.render();
        this.loadCurrentSong();
    }
}

app.start();
