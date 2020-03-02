fetch("data.json")
.then((response)=>{
    return response.json()//converting json data to js object
}).then((data)=>{
    //console.log(data);
    display_info(data.basics);
})
var bodyElement = document.querySelector("#root");
function display_info(info){
    //card view
    let card=document.createElement("div");
    card.classList.add("card");
    //Heading
    let heading = document.createElement("h2");
    heading.textContent=info.name;
    bodyElement.append(card);
    card.append(heading);
    //Horizontal line
    let line=document.createElement("hr");
    card.append(line);
    //Role
    let point1 = document.createElement("h3");
    point1.textContent=info.role;
    card.append(point1);
    //Email
    let point2 = document.createElement("a");
    point2.href="mailto:"+info.email;
    point2.textContent=info.email
    card.append(point2);

    
    let break1=document.createElement("br");
    let break2=document.createElement("br");
    card.append(break1)
    card.append(break2)

    //Mobile
    let point3 = document.createElement("a");
    point3.href="tel:"+info.mobile;
    point3.textContent=info.mobile;
    card.append(point3); 

    //Button
    var button = document.createElement("a");
    button.textContent="View Profile";
    button.classList.add("btn");
    card.append(button);
}