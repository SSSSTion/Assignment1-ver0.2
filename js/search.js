const images = [
    { src: "picture/110483852_p0_master1200.jpg", caption: "照片1" },
    { src: "picture/110483852_p0_master1200.jpg", caption: "照片2" },
    { src: "picture/110483852_p0_master1200.jpg", caption: "照片3" },
    { src: "picture/110483852_p0_master1200.jpg", caption: "照片4" },
    { src: "picture/846a74ca-26c4-4e53-84fd-0636623bae7c.jpg", caption: "照片5"},
    { src: "picture/846a74ca-26c4-4e53-84fd-0636623bae7c.jpg", caption: "照片6"},
    { src: "picture/846a74ca-26c4-4e53-84fd-0636623bae7c.jpg", caption: "照片7"},
    { src: "picture/846a74ca-26c4-4e53-84fd-0636623bae7c.jpg", caption: "照片8"},
    // 可以在这里添加更多图片和文字
  ];

document.getElementById('search-btn').addEventListener('click', () =>{
    const container = document.getElementById('pictures-container');
    container.innerHTML = ' '
    
    const selectedImages = images.sort(() => 0.5 - Math.random()).slice(0, 5)

    // selectedImages.forEach(item =>{
    //     const pictureItem = document.createElement('div');
    //     pictureItem.className = 'picture-item'

    //     const img = document.createElement('img')
    //     img.src = item.src;
    //     img.alt = item.caption;

    //     const caption = document.createElement('div');
    //     caption.className = 'caption';

    //     caption.textContent = item.caption;

    //     pictureItem.appendChild(img);
    //     pictureItem.appendChild(caption);
    //     container.appendChild(pictureItem);

    // })

    selectedImages.forEach(item =>{
        const pictures_container = document.createElement('div')
        pictures_container.className = 'picture-item'

        const img  = document.createElement('img')
        img.src = item.src;
        img.alt = item.caption;

        const caption = document.createElement('div')
        caption.className = 'caption'

        caption.textContent = item.caption

        pictures_container.appendChild(img)
        pictures_container.appendChild(caption)
        container.appendChild(pictures_container)

    

    })

})