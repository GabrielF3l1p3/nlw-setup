const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
    const toDay = new Date().toLocaleDateString('pt-br').slice(0, 5)
    const dayExists = nlwSetup.dayExists(toDay)
    if (dayExists) {
        alert('O Seu dia ja foi adcionado!✅')
    }

    nlwSetup.addDay(toDay)
}

function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}


// const data = {
//     run: ["01-01", "01-02", "06-02"],
//     water: ["01-05", "01-07"],
//     gym: ["01-02", "06-02"],
//     food: ["01-01", "01-02", "01-07"],
//     journal: ["01-01", "01-07", "01-08", "01-09"]
// }
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()