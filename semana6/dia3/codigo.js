let ctx = document.getElementById('mitabla').getContext('2d');

let tabla = new CharacterData(ctx, {


    type: "line",

    data: {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
        datasets: [{
            label: 'My Mi primera tabla',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    }

})