class HashTable {
    constructor(size) {
      this.data = new Array(size);
    }
  
    hash(key) {
      let hash = 0;
      for(let i = 0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    } //O(1)
  
    set(key, value) {
      let address = this.hash(key); // Posición (direccion) en memoria que ocupara el par clave-valor
      if(!this.data[address]){
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.data;
    } //O(1)
  
    get(key){
      const address = this.hash(key); // Direccion en memoria
      const currentBucket = this.data[address];
      if(currentBucket) {
        for(let i = 0; i < currentBucket.length; i++){
          if(currentBucket[i][0] === key){
            return currentBucket[i][1];
          }
        }
      }
    } //O(1)
  }
  
  const hashTable = new HashTable(10000);
  hashTable.set("firstname", "Mario Bros");
  hashTable.set("color", "Red");
  hashTable.set("speak", () => { console.log("Mamma mia!")});
  hashTable.get("speak");
  
  