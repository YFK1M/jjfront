import matchesBackground from '../../../assets/images/main/matchesBackground.png'
import commandBackground from '../../../assets/images/main/commandBackground.png'
import stadiumBackground from '../../../assets/images/main/stadiumBackground.png'
import newsBackground from '../../../assets/images/main/newsBackground.png'


export const bannersArray = [
    {
        id: 0,
        bannerNumber: 'banner__1',
        bannerBackgroundUrl: newsBackground,
        h2: 'решающий гол принес победу.',
        p: 'Как нашей комадне удалось выйграть чемпионат мира.',
        link: '/news',
        small: true,
    },
    {
        id: 1,
        bannerNumber: 'banner__2',
        bannerBackgroundUrl: matchesBackground,
        h2: 'ближайшие матчи',
        p: '',
        link: '/matches',
        small: false,
    },
    {
        id: 2,
        bannerNumber: 'banner__3',
        bannerBackgroundUrl: commandBackground,
        h2: 'небольшие изменения комманды.',
        p: 'Состав команды на 2022 год.',
        link: '/club',
        small: false,
    },
    {
        id: 3,
        bannerNumber: 'banner__4',
        bannerBackgroundUrl: stadiumBackground,
        h2: 'тур по стадиону',
        p: '',
        link: '/stadium',
        small: true,
    },
]