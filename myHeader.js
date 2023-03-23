export default {
    title:"Rick and Morty",
    company:[{
        name:"Warner Bros Discovery",
    href:"#"},
    ],
   /*  listTitle(){
        document.querySelector("#title").insertAdjacentElement("beforeend",`<a class=""`)
    }, */
    listarCompany(){
        let plantilla="";
        this.company.forEach((val,id) => {
            plantilla+= `<a class="p-2 link-secondary" href="${val.href}">${val.name}</a>`
            console.log(val);
            
        });
        document.querySelector("#company").insertAdjacentHTML("beforeend", plantilla);
           
    },
     listTitle(){
        document.querySelector("#tituloprincipal").insertAdjacentHTML("beforeend", `<a class="blog-header-logo text-dark" href="${this.title.href}">${this.title.name}</a>`)

     }
}