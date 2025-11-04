class Notificacion{

    enviar(){
        return "El mensaje se ha notificado";
    }
}

class Email extends Notificacion{

    constructor(email){
        super();
        this.email = email;
    }

    enviar(){
        return "El mensaje se ha enviado al correo "+this.email;
    }
}

class SMS extends Notificacion{

    constructor(telefono){
        super();
        this.telefono = telefono;
    }

    enviar(){
        return "El mensaje se ha enviado al celular "+this.telefono;
    }
}

class Push extends Notificacion{

    constructor(usuario){
        super();
        this.usuario = usuario;
    }

    enviar(){
        return "El mensaje se ha enviado al usuario "+this.usuario;
    }
}

function recorrer(lista){
    for (const noti of lista){
        console.log(noti.enviar());
    }
}

const listaNotificaciones = [];

listaNotificaciones.push(new Email("amendozapan@unsa.edu.pe"));
listaNotificaciones.push(new SMS(931492700));
listaNotificaciones.push(new Push("Alejandro"));
recorrer(listaNotificaciones);