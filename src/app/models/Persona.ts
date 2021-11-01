export class Persona {
    constructor(public id:string, public nombre:string,
        public apellido:string, public createAt:string, 
        public email:string) {
            this.id = id;
            this.nombre = nombre;
            this.apellido = apellido;
            this.createAt = createAt;
            this.email = email;
    }
}