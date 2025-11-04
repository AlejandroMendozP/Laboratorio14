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

const listaUsuarios = [];
listaUsuarios.push(new Cliente("Ana", "ana@mail.com", 5));
listaUsuarios.push(new Cliente("Luis", "luis@mail.com", 3));
listaUsuarios.push(new Administrador("Carlos", "carlos@mail.com", { crear: true, editar: true, eliminar: false }));
listaUsuarios.push(new Administrador("Marta", "marta@mail.com", { crear: true, editar: false, eliminar: false }));

for (const usuarios of listaUsuarios){
    console.log(usuarios.mostrarInfo());
}