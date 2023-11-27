export default function messageManager() {
    const welcome = document.getElementById('message');
    const button = document.getElementById('sir');

    const fonctionArrive = () => {
        welcome.style.right = '0%';
    }

    const fonctionPartir = () => {
        welcome.style.right = '-100%'
    }

    button.addEventListener('click', fonctionPartir);
    window.addEventListener('load', fonctionArrive)
}