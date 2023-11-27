export default function io () {
    const arona = document.getElementById('pio');
    const ndiaye = document.getElementById('lick');
    let verif = true;

    const samba1 = () => {
        if (verif) {
            ndiaye.style.backgroundImage = 'url("https://icons-for-free.com/iconfiles/png/512/moon-1324760534300403341.png")';
            verif = false;
        } else {
            ndiaye.style.backgroundImage = 'url("https://icons-for-free.com/iconfiles/png/512/shine+sun+sunny+weather+icon-1320183301337979553.png")';
            verif = true;
        }
    }

    arona.addEventListener('click', samba1);
}
