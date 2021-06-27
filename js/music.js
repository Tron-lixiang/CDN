const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    order: 'random',
    loop: 'all',
    preload: 'auto',
    mutex: true,
    audio: [
        {
            name: "喜欢你",
            artist: '邓紫棋',
            url: 'http://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/xihuanni.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/xihuanni.jpg',
        },
        {
            name: '前世今生',
            artist: '杜南/龚子笑',
            url: 'http://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/qianshijinsheng.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/qianshijinsheng.jpg',
        },
        {
            name: 'Light of the Seven',
            artist: 'Ramin Djawadi',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Light_of_the_Seven.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Light_of_the_Seven.jpg',
        },
        {
            name: 'Welcome To Los Santos',
            artist: 'GTA5',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Welcome_To_Los_Santos.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Welcome_To_Los_Santos.jpg',
        },
        {
            name: '理想三旬',
            artist: '谢春花',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/lixiangsanxun.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/lixiangsanxun.jpg',
        },
        {
            name: '送别',
            artist: '李叔同',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/songbie.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/songbie.jpg',
        },
        {
            name: '渡口',
            artist: '蔡琴',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/ferry.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/ferry.jpg',
        },
        {
            name: 'Sweet Dreams',
            artist: 'Eurythmics',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Sweet_Dreams.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Sweet_Dreams.jpg',
        },
        {
            name: 'Soviet March',
            artist: '红色警戒3',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/soviet_march.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Soviet_March.jpg',
        },
        {
            name: '男孩别哭(翻唱)',
            artist: '橙dope',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/nanhaibieku.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/nanhaibieku.jpg',
        },
        {
            name: '光辉岁月',
            artist: 'Beyond',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/guanghuisuiyue.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/guanghuisuiyue.jpg',
        },
        {
            name: 'Non Je Ne Regrette Rien',
            artist: 'Edith Piaf ',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Non_Je_Ne_Regrette_Rien.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Non_Je_Ne_Regrette_Rien.jpg',
        },
        {
            name: '引诱',
            artist: '久石让',
            url: 'http://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/lure.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/lure.jpg',
        },
        {
            name: 'Heathens',
            artist: 'Suicide Squad',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Heathens.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Heathens.jpg',
        },
        {
            name: 'Daybreak',
            artist: 'Overwerk',
            url: 'http://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/OVERWERK-Daybreak.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/OVERWERK-Daybreak.jpg',
        },
        {
            name: 'In The Eyes',
            artist: '江映东',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/In_the_eyes.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/In_the_eyes.jpg?x-oss-process=style/reduce',
        },
        {
            name: 'Experience',
            artist: 'Ludovico Einaudi',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Experience.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Experience.jpg',
        }
    ]
});