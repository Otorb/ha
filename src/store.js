import { createStore } from "redux";
import  reinaldo from './images/reinaldo.jpeg'
import  ambar from './images/ambar.jpeg'
import  maria from './images/maria.jpeg'
import  raquel from './images/raquel.jpg'



const initialState = {
    jugadores: [ {
            id: 1,
        nombre: "Glendys Bolivar",
          foto: "https://scontent.flim8-1.fna.fbcdn.net/v/t31.18172-8/25075081_10214012024711206_1150102176876806220_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGRTqH3OtHku1mpC3qa9PuTNhXk0L1zLyY2FeTQvXMvJiHuS7YUfOB881Q7G-wNAPM&_nc_ohc=YgFysZY5dioAX_2_ygy&_nc_ht=scontent.flim8-1.fna&oh=00_AT8t8wLnRBmbmU9o2gZ8SzzxnB1A1AoKayG3lt_xF8lI4g&oe=6290A442"
        },
        {
            id: 2,
        nombre: "José Miguel",
          foto: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/277788010_10221211466252836_3410907099432397751_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGv-UCsXN8q5YHAUysNwvuziwKGbkq-JOqLAoZuSr4k6iqTNAJMuN6jLgxtq7TOWr8&_nc_ohc=-uLSbcqFdH4AX8NEDIg&_nc_ht=scontent-lim1-1.xx&oh=00_AT9454H15bW34OgwtRNTQiGmEvypB1BIIJ940vxFpYpTFg&oe=62755D85"
        },
        {
            id: 3,
        nombre: "Ambar Casique",
          foto: "https://scontent.flim9-1.fna.fbcdn.net/v/t1.6435-9/48273133_10213421040217054_7539738392896995328_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEOh4MX6YhHbXIU96332wpVSORZJauR46FI5Fklq5Hjob-1bSTdpKYtNL7qElzWxaQ&_nc_ohc=Zl0WdJh6lK4AX_xyqTy&_nc_ht=scontent.flim9-1.fna&oh=00_AT9vAg7T4wGOwlliSKRPVhkRrd32H3RvnCapf6gWjB7aaw&oe=629161D9"
        },
        {
            id: 4,
        nombre: "Maria Casique",
          foto: "https://scontent.flim9-1.fna.fbcdn.net/v/t1.6435-9/135741534_2513878835575715_2181815024823480882_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeHD6mpofXtqJvkSLxAEaZzP9rD9E2DN0YD2sP0TYM3RgI-nApDw5qGbsIZOA6AJTRY&_nc_ohc=x4nVSlRJkgQAX_RxIwe&_nc_ht=scontent.flim9-1.fna&oh=00_AT9IkZa6lJeRNNQNYx-zPRMkNkQBDRksBfonFE3H7cArzw&oe=628FED39"
        },
        {
            id: 5,
        nombre: "Reinaldo Vera",
          foto: "https://scontent.flim8-1.fna.fbcdn.net/v/t1.6435-9/136764051_10159188995409935_7639917772097298304_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEhuWiQQZjKLJV0_o_OAH3efzMOX0ItRCh_Mw5fQi1EKMzTSBNSg6n_JtFvvPKgx-o&_nc_ohc=LP3LQL1Ij7QAX9D0SoH&_nc_ht=scontent.flim8-1.fna&oh=00_AT-Hpx-Pgb_MPTDCz-h7-scTwJ-YpLNea0pJALB4rL4qLQ&oe=6291C315"
        },
        {
            id: 6,
        nombre: "Raquel Lapa",
          foto: "https://scontent.flim13-1.fna.fbcdn.net/v/t1.6435-9/170811738_5973444692681485_5593275229769129527_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGO7tKGpvTiy0-Ad3VTQBw9mPd3mub1UuaY93ea5vVS5qHzIEyvMuYtPb4VGezB-nk&_nc_ohc=Y1bb4amHzhwAX8uhLZc&_nc_ht=scontent.flim13-1.fna&oh=00_AT8flv5aEvSXlARP5msnliD_P5HzFIApR1Hiku6jjGnspA&oe=6291634B"
        },
        {
            id: 7,
        nombre: "Otoniel Reyes",
          foto: "https://scontent-lim1-1.xx.fbcdn.net/v/t31.18172-8/10386932_10152269496729403_4077196348286881065_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHc8HCcpzBMzCMh9cIssakkuI5kDrpZ8Ti4jmQOulnxOKJ3d5piDFf2vs6Z5ljF9F4&_nc_ohc=ee1DoILL-yIAX85swTi&_nc_ht=scontent-lim1-1.xx&oh=00_AT_xVOOqAxFnkt0imfrit-dmc1qkWmIlVhk25hluQGqpzw&oe=6295912C"
        },
        {
            id: 8,
        nombre: "Leida Rodriguez",
          foto: "https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-9/74830688_168606097582935_5806075973442994176_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHaxwrn0lDTcuih01aaDYSouiMtJO8UObu6Iy0k7xQ5u9AIjPpT42oQmcXJLKVqYYE&_nc_ohc=v13gwyj0rlIAX9qsuiN&_nc_ht=scontent-lim1-1.xx&oh=00_AT9Jn1C6_H6G3m3FemYSgCy1j1xJDU5yVKoB-JzIUdxO-Q&oe=6248AF9E"
        },
        {
            id: 9,
        nombre: "Alejandro Mendoza",
          foto: "https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-9/37712902_2016414388421989_6773547554782052352_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGslX6LH31m_aR-cutN4rqEUvljgGR9whFS-WOAZH3CEXUhZn4JnLY7WaEkf6bTUvA&_nc_ohc=LrcemOmBLPIAX_X5Tpn&_nc_ht=scontent-lim1-1.xx&oh=00_AT9m2Sa0zA7GmPCRBrcVF5ptXHjgstgr3_fd8zedXVgDQg&oe=624812C3"
        },
        {
            id: 10,
        nombre: "Felipa Alvarez",
          foto: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/247510233_105932205216007_4599051146044509724_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGcymHyIfo8GWlt-Ibbwa5rUIP1FeVwoNdQg_UV5XCg18fVKu7USsXArw_EnReHUKM&_nc_ohc=sIlzBZP8y38AX8j4cKH&_nc_ht=scontent-lim1-1.xx&oh=00_AT9-YjsStvj9ktg577uonQ6sYdlzadswXT565_4DnMyRSQ&oe=6228112B"
        },
        {
            id: 11,
        nombre: "Camilo Reyes",
          foto: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/275178318_10158958229754403_6955478815895414285_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFBpSfb5ZxI9_W04VwSrrWowHE1lxA6o03AcTWXEDqjTVq0UJaOTLuFD82xPpphq3A&_nc_ohc=36B1BK_Qm3oAX_8EikC&tn=p1boMWFOWAmekMrr&_nc_ht=scontent-lim1-1.xx&oh=00_AT9z07WYmqRZ5mhMC2PCzHH-44q3CAKgNxt3R34dluYF-A&oe=62279495"
        }],
    titulares: [],
    suplentes:[],
}

const reducerEntrenador = (state = initialState, action) =>{

    if (action.type === "AGREGAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }
    if (action.type === "AGREGAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if (action.type === "QUITAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if (action.type === "QUITAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
} 


export default createStore(reducerEntrenador)