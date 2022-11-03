// - al click su una thumb, visualizzare in grande l’immagine corrispondente
// - aggiungere la classe active alla thumb attiva
//bonus 1: autoplay
//bonus 2: stop autoplay con hover

//VUE
const {createApp} = Vue;

createApp({

  // MY OBJECTS
  data(){
    return{

      cities: [
        {
          name :'San Francisco',
          country: 'USA',
          dimension: '122 km²',
          image: 'img/San Francisco.jpg'
        },
        {
          name :'Lisbon',
          country: 'Portugal',
          dimension: '100,05km²',
          image: 'img/Lisbon.jpg'
        },
        {
          name :'Rome',
          country: 'Italy',
          dimension: '1287,36km²',
          image: 'img/Rome.jpg'
        },
        {
          name :'Chicago',
          country: 'USA',
          dimension: '606,34km²',
          image: 'img/Chicago.jpg'
        },
        {
          name :'Madrid',
          country: 'Spain',
          dimension: '604,3km²',
          image: 'img/Madrid.jpg'
        },
      ],

      activeImage: 0,

      autoPlay: () => {}
    }
  },

  // MY FUNCTIONS
  methods:{

    //change image at click
    changeImage(index){
      this.activeImage = index;
    },

    //infinite loop to change image
    nextPrev(isNext){
      isNext ? this.activeImage++ : this.activeImage--;

      if(this.activeImage === this.cities.length){
        this.activeImage = 0;
      }

      else if(this.activeImage < 0){
        this.activeImage = this.cities.length - 1;
      }

    },

    //loop automatic start and stop
    getAutoPlay(){
      this.autoPlay = setInterval(() => {
          this.nextPrev(true);
      }, 3000);
    },

    //loop stop
    autoPlayStop(){
      clearInterval(this.autoPlay);
    },
  },

  //when opening page
  mounted(){
    this.getAutoPlay();

  }
}).mount('#app');