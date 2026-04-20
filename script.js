class provincias {
    constructor(nombre, capital , habitantes, superficie) {
        this.nombre=nombre;
        this.capital=capital;
        this.habitantes=habitantes;
        this.superficie=superficie;
    }
}

class provincias_sur extends provincias {
    constructor(nombre, capital , habitantes, superficie, cantidad_industrias_petroleras) {
        super(nombre, capital , habitantes, superficie, cantidad_industrias_petroleras);
        this.cantidad_industrias_petroleras=cantidad_industrias_petroleras
    }
};

class provincias_norte extends provincias {
    constructor(nombre, capital , habitantes, superficie, cantidad_industrias_agro) {
        super(nombre, capital , habitantes, superficie, cantidad_industrias_agro);
        this.cantidad_industrias_agro=cantidad_industrias_agro;
    }
};


let tucuman = new provincias_norte( "Tucumán", "San Miguel de Tucumán", "1,705,000", "22,524 km²", 10);
console.log(tucuman);

let salta = new provincias_norte("Salta", "Salta", "1,441,000", "145,014 km²", 5);
console.log(salta);

let neuquen = new provincias_sur("Neuquén", "Neuquén", "711,000", "94,078 km²", 15);
console.log(neuquen);

