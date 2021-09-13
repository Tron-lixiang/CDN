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
            name: 'Havana',
            artist: 'Camila-Cabello & Young-Thug',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Havana.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Havana.jpg',
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
            name: 'Theme_From_SanAndreas',
            artist: 'GTA4',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Theme_From_SanAndreas.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Theme_From_SanAndreas.jpg',
        },
        {
            name: '2_Phút_Hơn',
            artist: 'Pháo,Kaiz',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/2_Phút_Hơn.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/2_Phút_Hơn.jpg',
        },
        {
            name: 'Wrap Me in Plastic',
            artist: 'Chromance',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/WrapMeInPlastic.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/WrapMeInPlastic.jpg',
        },
        {
            name: 'Lovefool',
            artist: 'Twocolors',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/twocolors-Lovefool.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/twocolors-Lovefool.jpg',
        },
        {
            name: '最美的期待',
            artist: '周笔畅',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/zuimeideqidai.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/zuimeideqidai.jpg',
        },
        {
            name: '牧马人',
            artist: '杨坤',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/mumaren.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/mumaren.jpg',
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
            name: 'Hall Om Mig',
            artist: 'Nanne',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/NanneHallomMig.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/NanneHallomMig.jpg',
        },
        {
            name: 'Kолыбельная',
            artist: 'Rauf & Faik',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/yaolanqu.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/yaolanqu.jpg',
        },
        {
            name: 'Sweet Dreams',
            artist: 'Eurythmics',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Sweet_Dreams.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Sweet_Dreams.jpg',
        },
        {
            name: 'Dance Monkey',
            artist: 'Tones and I',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/TonesandI-DanceMonkey.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/TonesandI-DanceMonkey.jpg',
        },
        {
            name: '男孩别哭',
            artist: 'dope',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/nanhaibieku.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/nanhaibieku.jpg',
        },
        {
            name: 'Intro AE86',
            artist: '陈光荣',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/IntroAE86.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/IntroAE86.jpg',
        },
        {
            name: 'Counting Sheep',
            artist: 'SAFIA',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/SAFIA-CountingSheep.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/SAFIA-CountingSheep.jpg',
        },
        {
            name: 'Yuriko Theme',
            artist: '红色警戒3起义',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/YurikoTheme.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/YurikoTheme.jpg',
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
            name: 'Faded',
            artist: 'Alan Walker',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Faded.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Faded.jpg',
        },
        {
            name: '特务J',
            artist: '蔡依林',
            url: 'http://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/tewuj.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/tewuj.jpg',
        },
        {
            name: '引诱',
            artist: '久石让',
            url: 'http://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/lure.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/lure.jpg',
        },
        {
            name: '你的答案',
            artist: '阿冗',
            url: 'http://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/nidedaan.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/nidedaan.jpg',
        },
        {
            name: 'Please Don\'t Go',
            artist: 'Joel Adams',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/PleaseDon_tGo.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/PleaseDon_tGo.jpg',
        },
        {
            name: 'Pimped_out_Getaway',
            artist: 'PAYDAY2',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Pimped_out_Getaway.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Pimped_out_Getaway.jpg',
        },
        {
            name: 'Gangsta\'s Paradise',
            artist: 'Coolio/L.V.',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Gangstas_Paradise.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Gangstas_Paradise.jpg',
        },
        {
            name: 'Thunderclouds',
            artist: 'LSD_Sia_Diplo_Labrinth',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/Thunderclouds.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/Thunderclouds.jpg',
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
        },
        {
            name: 'Write This Down',
            artist: 'Soulchef',
            url: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/WriteThisDown.mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/WriteThisDown.jpg',
        },
        {
            name: 'TRON_Legacy(End_Titles)',
            artist: 'TRON',
            url: 'http://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/source/TRON_Legacy(End_Titles).mp3',
            cover: 'https://lixiangpro.oss-cn-hangzhou.aliyuncs.com/resource/music/cover/TRON_Legacy(End_Titles).jpg',
        }
    ]
});