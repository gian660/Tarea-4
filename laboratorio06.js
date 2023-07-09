/* Definiar una clase */
class Alumno {

    /* Declarar atributos */
    codigo = "000X";
    nombre = "Default";
    nota1 = 0;
    nota2 = 0;
    nota3 = 0;
    nota4 = 0;

    /* Definir métodos */
    promedio() {
        return ((this.nota1) * 0.15 + (this.nota2) * 0.2 + (this.nota3) * 0.25 + (this.nota4) * 0.4);
    };

    condicion(){
        if(this.promedio() >=12){
            return("Aprobó");
        }else{
            return("Desaprobó");
        };
    };

    obsequio() {
        if(this.promedio() >= 17){
            alert("El alumno: " + this.nombre + " " + this.condicion() + " con promedio final de " + this.promedio() + " por tal motivo se le regala una mochila");
        }else{
            alert("El alumno: " + this.nombre + " " + this.condicion() + " con promedio final de " + this.promedio());
        }
    };

}

/* Añadir función al botón enviar */
$("document").ready(function (){
    $("#btnEnviar").click(function () {
        let alumno = new Alumno();
        alumno.codigo = $("#txtCodigo")[0].value;
        alumno.nombre = $("#txtNombre")[0].value;
        alumno.nota1 = $("#txtNota1")[0].value;
        alumno.nota2 = $("#txtNota2")[0].value;
        alumno.nota3 = $("#txtNota3")[0].value;
        alumno.nota4 = $("#txtNota4")[0].value;
        alumno.obsequio();
        console.log(alumno);
    })
})
