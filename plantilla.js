Vue.createApp({
    data(){
        return{
            productos: [
                {
                    nombre:'Cebollas',
                    precio: 10,
                    cantidad: 10
                },
                {
                    nombre:'Tomates',
                    precio: 15,
                    cantidad: 20
                },
                {
                    nombre:'Uvas',
                    precio: 20,
                    cantidad: 100
                },
            ]

        }
    }
}).mount('#App')