const natalia = {
    name: "natalia",
    age: 20,
    cursoAprovados: [
        "Desarrolo web",
        "Curso definitivo de CSS"
    ],
    actualizacionCursosAprovados(nuevoCursoAprovado){
        this.cursoAprovados.push(nuevoCursoAprovado);
    },
}

function student(name,age,cursoAprovados){
    this.name = name;
    this.age = age;
    this.cursoAprovados = cursoAprovados;
}

student.prototype.agregarCurso = function(nuevoCurso){
    this.cursoAprovados.push(nuevoCurso);
}

const pedro = new student("Pedro", 20, ["Marketing", "Diseño"]);
