function bar() {

    document.querySelector("#bar").addEventListener("click",()=>{
        document.querySelector("#navbar").classList.add('active')
    })

    document.querySelector("#close").addEventListener("click",()=>{
        document.querySelector("#navbar").classList.remove('active')
    })
}
bar()