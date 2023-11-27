export default function changementDeCouleur() {
    const click = document.getElementById('pio');
    const bebe = document.getElementById('lick');
    const baba = document.getElementById('lion');
    const button = document.getElementById('helloToYou')

    const colorChange = () => {
        const head = document.getElementById('sip');
        const foot = document.getElementById('sop');
        const nav = document.getElementById('elpapa');
        const barreToutcourt = document.getElementById('pi');
        const barreDefilement = document.getElementById('pa');
        const message = document.getElementById('message');

        if (bebe.style.backgroundImage.includes('moon-1324760534300403341.png')) {
            foot.style.backgroundColor = '#2272FF';
            head.style.backgroundColor = '#2272FF';
            nav.style.backgroundColor = '#2272FF';
            message.style.backgroundColor = '#2272FF';
            document.body.style.backgroundColor = '#121212';
            barreToutcourt.style.backgroundColor = '#2272FF';
            barreDefilement.style.backgroundColor = 'white';
        } else if (bebe.style.backgroundImage.includes('shine+sun+sunny+weather+icon-1320183301337979553.png')) {
            foot.style.backgroundColor = '#00ABE4';
            head.style.backgroundColor = '#00ABE4';
            nav.style.backgroundColor = '#00ABE4';
            message.style.backgroundColor = '#00ABE4';
            document.body.style.backgroundColor = '#B3E0F2';
            barreToutcourt.style.backgroundColor = '#00ABE4';
            barreDefilement.style.backgroundColor = 'white';
        }
    };

    const handler = () => {
        if (bebe.style.backgroundImage.includes('moon-1324760534300403341.png')) {
            baba.style.backgroundColor = '#2272FF'; 
            button.style.backgroundColor ='transparent';
        } else if (bebe.style.backgroundImage.includes('shine+sun+sunny+weather+icon-1320183301337979553.png')) {
            baba.style.backgroundColor = '#00ABE4';
            button.style.backgroundColor ='transparent'; 
        }
    };

    click.addEventListener('click', colorChange);
    click.addEventListener('click', handler);
}





