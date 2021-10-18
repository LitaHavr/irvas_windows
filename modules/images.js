const images=()=>{
    const imgPopup=document.createElement('div'),
        workSection=document.querySelector(".works"),
        bigImage=document.createElement('img');

    //imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent='center';
    imgPopup.style.alignItems='center';
    imgPopup.style.display='none';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click',(e)=>{
        e.preventDefault();

        let target=e.target;

        if(target && target.classList.contains('preview')){
            imgPopup.classList.add('popup');
            imgPopup.style.display='flex';
            imgPopup.style.maxWidth='100%';
            imgPopup.style.maxHeight='100%';

            document.body.style.overflow = 'hidden';
            const  path = target.parentNode.getAttribute("href");
            bigImage.setAttribute("src", path)

        }

        if(target && target.matches('div.popup')){
            imgPopup.classList.remove('popup');
            imgPopup.style.display='none';
            document.body.style.overflow = 'visible';

        }
    })


}

export default images;