class Usuario{
    constructor (nombre, email){
        this.nombre = nombre;
        this. email = email;
    }

    mostrarInfo(){
        return "Nombre: "+this.nombre+"\nEmail: "+this.email;
    }
}

class Cliente extends Usuario{
    
    constructor(nombre, email, fidelidad){
        super(nombre, email);
        this.fidelidad = fidelidad;
    }

    mostrarInfo(){
        return super.mostrarInfo()+"\nFidelidad: "+this.fidelidad;
    }
}

class Administrador extends Usuario{
    
    constructor(nombre, email, permisos){
        super(nombre, email);
        this.permisos = permisos;
    }

    mostrarInfo(){
        return super.mostrarInfo()+ 
           "\nPermisos \nCrear: " + this.permisos.crear + 
           "\nEditar: " + this.permisos.editar + 
           "\nEliminar: " + this.permisos.eliminar;
    }
}

const cliente = new Cliente("Alejandro Mendoza", "amendozapan@unsa.edu.pe", 3);
console.log(cliente.mostrarInfo());
const administrador = new Administrador("Alejandro Pantigoso", "amendoza@unsa.edu.pe", 
    {crear: true, editar: true, eliminar: false});
console.log(administrador.mostrarInfo());

