var fs = require('fs')


function combineFiles(){
    let files = fs.readdirSync('drugs')



files.forEach((file)=>{
    let contents = JSON.parse(fs.readFileSync('drugs/'+file,{encoding:'utf-8',}))
    // console.log(file.split('.')[0].split('_'))
    let disorder = file.split('.')[0].split('_')[0]
    let type = file.split('.')[0].split('_')[1]
    let edited = contents.map((medication)=>{
        medication.disorder = disorder
        medication.type = type
        return(medication)
    }
    )
    // console.log(edited)
    fs.appendFileSync('drugs_list.json',JSON.stringify(edited))

    
})
}


let list = JSON.parse(fs.readFileSync('new_drugs_list.json',{encoding:'utf-8'}))
let names_only= []
let objects_list = []
list.forEach((drug)=>{
    // names_only.push(drug.INN)
    drug.brand_names.forEach((name)=>{
        if(names_only.includes(name)){
            // console.log("duplicate")
        }
        else{
            names_only.push(name)
            objects_list.push({name:name})
        }
        
    })
})
// let uniq = names_only.filter((v,i,a)=>a.findIndex(t=>(t.id===v.id))===i)
let drugs_list = JSON.parse(fs.readFileSync('top_300_drugs.json',{encoding:'utf-8'}))
console.log(objects_list.length)
drugs_list.forEach((drug)=>{
    var isDuplicate = false;
    for(var i = 0; i < objects_list.length; i++) {

        if (objects_list[i].name == drug.name) {
            isDuplicate = true;
            break;
        }
    }
    // let isDuplicate = objects_list.some( object => object['brand_name'] === drug.name )
    if((isDuplicate)){
        console.log(drug.name)
        // objects_list.push({name:drug.name})
    }
    else{
        objects_list.push({name:drug.name})
    }
})
console.log(objects_list.length)


fs.writeFileSync('new_file.json',JSON.stringify(objects_list))
// let new_list = []
// list = list.map((drug)=>{
//     // console.log()
//     let brand_names = drug.brand_names.split(',')
//     drug.brand_names = brand_names.map((name)=>name.trim())
//     return drug
// })

// fs.writeFileSync('new_drugs_list.json',JSON.stringify(list))