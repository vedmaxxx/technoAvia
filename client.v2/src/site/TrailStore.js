import {makeAutoObservable} from 'mobx'
// страница маршрутов

// взаимодействие с mobx, хранение данных
export default class TrailStore {
   
    constructor() {
        // переключатель, авторизован ли пользователь
        
        this._trails = [
            {id: 1, 
            name: 'Агидель', 
            description: 'Белая – одна из главных рек Башкирии. Широко известна своими красотами, привлекающими многочисленных туристов. Знаменита и расположенная на этой реке Капова пещера (Шульган-Таш).', 
            trailtime: '4', 
            image:'https://travelvillage.ru/upload/resize_cache/sprint.editor/e4f/1024_768_1/e4f18863a33269dc1f4329c197178cf9.jpg'},
            {id: 2, 
            name: 'Шиханы', 
            description: 'Шиханы — изолированные возвышенности в Башкирском Предуралье. Состоят из четырёх гор-одиночек: Торатау, Шахтау, Юрактау и Куштау, образующих узкую цепочку, вытянутую вдоль реки Белой на 20 км. Они расположены вблизи городов Стерлитамака, Ишимбая и Салавата. Представляют собой остатки барьерного рифа, образовавшегося в тёплом море (Уральский океан) начала пермского периода. В отложениях встречаются окаменелости — остатки древних беспозвоночных.', 
            trailtime: '2', 
            image:'https://pilothub.ru/datas/folio/5677-aerosemka-ufa-shixany.jpg'},
            {id: 3, 
            name: 'Капова пещера', description: 'aes че за маршрут', 
            trailtime: '4', 
            image:'https://www.rgo.ru/sites/default/files/node/19736/kapova-peshhera.jpg'},
        ]
        makeAutoObservable(this)
    }

    setTrails(trails) {
        this._trails = trails
    }
    
    get trails() {
        return this._trails
    }
}