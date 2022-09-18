let LastModif = Date(document.lastModified);
p = document.createElement("p");
p.innerHTML = "Last Updated: "+ LastModif;
document.body.appendChild(p);