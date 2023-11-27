export default function pageReload () {
    const yesSir = document.getElementById('mama');

    const reload = () => {
        window.location.reload();
    }

    yesSir.addEventListener('click' , reload);
}