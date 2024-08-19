const {createApp}= Vue;

createApp({
    data() {
        return {
            message: "Hello mit Vue",
            author: "Dani",
            cars: ["Volvo", "Vw", "Opel", "Fiat" ],
            drinks: [{
                name: "coffee",
                type: "hot",
            },
            {
                name: "tea",
                type: "hot",
            },
            {
                name: "cola",
                type: "cold",
            },
        ]

        };
    },

methods: {
    getAuthor(){
        return "Erstell von "+ this.author;
    },
},
}).mount("#app");