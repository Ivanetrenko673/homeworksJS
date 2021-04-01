const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    }

    salaries.sum = function () {
        console.log(this.John + this.Ann + this.Pete)
    }
    salaries.sum()