const closeButton = document.getElementById('close');
const flashMsg = document.getElementsByClassName('flash')[0];
let timeoutID;        

const hideMsg = () => {
    const removeMsg = () => flashMsg.setAttribute('style', 'display:none');
    
    flashMsg.classList.add('hidden');
    timeoutID = setTimeout(removeMsg, 2000);
};

timeoutID = setTimeout(hideMsg, 15000);
closeButton.addEventListener('click', hideMsg);