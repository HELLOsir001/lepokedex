function navette(){
    const button = document.getElementById('button');
    let itTurned = false;

    const rotationOnClick = () => {
        if (itTurned){
            button.style.transform = 'rotate(0deg)';
            button.style.transition = 'transform 0.5s';
            button.style.backgroundColor ='transparent'
            itTurned = false;
        }

        else{
            button.style.transform = 'rotate(90deg)';
            button.style.transition = 'transform 0.5s';
            button.style.backgroundColor ='transparent'
            itTurned = true;
        }
    };

    button.addEventListener('click', rotationOnClick);
}

export default navette;

const openNav = () => {
    const navElement = document.getElementById('elpapa');
    navElement.style.left = '0%';
  };
    
  const closeNav = () => {
    const navElement = document.getElementById('elpapa');
    navElement.style.left = '-100%'; 
  };
  
  export { openNav, closeNav };
  
   


