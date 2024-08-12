const addContent= (videoDescription,link)=>{
    let body = document.body;

    let vdes=document.getElementById(videoDescription);
    // console.log(vdes);
    if(vdes!=null){
        console.log(vdes.getElementsByTagName("div"));
         
        vdes.getElementsByTagName("div")[0].insertAdjacentHTML("beforeend",link)
    }
    else{
        let html = `<section id="${videoDescription}" class="flex flex-col items-center gap-6 mt-5">
        <h1 class="text-2xl font-bold">${videoDescription}</h1>
        <div class="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6 items-center justify-items-center ">
            ${link}
            
    
        </div>
        </section>`
        body.insertAdjacentHTML("beforeend",html)

    }
    
}
let h=200;
let w=300;

addContent("Home",`<iframe width="300" height="200" src="https://www.youtube.com/embed/h4Ue98USW2U?si=ZTQ-hwg2vHyVIwLs"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
addContent("Education",`<iframe width="300" height="200" src="https://www.youtube.com/embed/SBuZSalHLe0?si=k6NIZNWn246FUccT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)

addContent("Entertainment",`<iframe width="300" height="200" src="https://www.youtube.com/embed/h4Ue98USW2U?si=ZTQ-hwg2vHyVIwLs"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)

addContent("Education",`<iframe width="300" height="200" src="https://www.youtube.com/embed/h4Ue98USW2U?si=ZTQ-hwg2vHyVIwLs"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
addContent("Education",`<iframe width="${w}" height="${h}" src="https://www.youtube.com/embed/hVvAkPbJwnw?si=bLDTjLdY9CLyNbI6"            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)

addContent("Kids",`<iframe width="300" height="200" src="https://www.youtube.com/embed/ifF616Qzupk?si=KUmKzZTHas88hbJ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
addContent("Kids",`<iframe width="300" height="200" src="https://www.youtube.com/embed/2nrEfUuFoyg?si=B70Nmp8weRXIDweO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
addContent("Kids",`<iframe width="300" height="200" src="https://www.youtube.com/embed/Ka-kGls0kPw?si=OxFXQ7bubRSQZGXt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
addContent("Music",`<iframe width="300" height="200" src="https://www.youtube.com/embed/Ka-kGls0kPw?si=OxFXQ7bubRSQZGXt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
addContent("Home",`<iframe width="300" height="200" src="https://www.youtube.com/embed/Ka-kGls0kPw?si=OxFXQ7bubRSQZGXt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
addContent("Home",`<iframe width="300" height="200" src="https://www.youtube.com/embed/_9mTJ84uL1Q?si=hnQhlcSJqFpxjbCx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
addContent("Education",`<iframe width="300" height="200" src="https://www.youtube.com/embed/273hDFcwvUQ?si=hecWLbw-688tEyYX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
addContent("Home",`<iframe width="300" height="200" src="https://www.youtube.com/embed/273hDFcwvUQ?si=hecWLbw-688tEyYX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)



