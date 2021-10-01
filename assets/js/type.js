const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const apps = {
    songs:
        [
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
        document.querySelector('.playlist').innerHTML = htmls.join('');
    },

    start: function () {
        this.render();
    }
}

apps.start();
