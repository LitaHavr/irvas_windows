const closeModal=()=>{
    const modalClose=document.querySelector(".popup_calc_end");

    modalClose.style.display='none';
    document.body.style.overflow = 'visible';

}

export default closeModal;