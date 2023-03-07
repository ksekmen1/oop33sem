Vue.createApp({
    data() {
        return {
            word: null,
            words:[],
            message: null,
            
        }
    },
    methods: {
        show(word){
            this.word = word
            this.words = []
            this.words.push(this.message = word)
            this.words.push(this.message.toUpperCase(word))
            this.words.push(this.message.toLowerCase(word));
            this.words.push(this.message = word.charAt(0).toUpperCase() + word.toLowerCase().slice(1));
            this.words.push(this.message = word.toLowerCase().slice(0,word.length-1) + word.charAt(word.length-1).toUpperCase());
            this.words.push(this.message = word.split("").reverse().join(""));

        }
        
    },

}).mount('#app');