function bd(){​​
    let dd = [
        {​​ "id":Date.now(),"nome":"will","senha":123 }​​, //0
        {​​ "id":Date.now(),"nome":"bob","senha":2222 }​​, //1
        {​​ "id":Date.now(),"nome":"ringo","senha":3333 }​​ //2
       ]
       let user = [
                    {​​ "id":Date.now(),"nome": "Satoshi","senha": 3636 }​​
                  ]
       dd.push(user)
      let n = JSON.stringify(dd);
    localStorage.setItem("tds", n);
    //let dados = localStorage.getItem("tds")
    let dados = JSON.parse(window.localStorage.getItem('tds'))
    console.log(dados[0].nome)
    // Retrieve
   // document.getElementById("demo").innerHTML = localStorage.getItem("todos");
}​​

// Funções Login
function matriz(){

    var dados = [
        {​​ "id":Date.now(),"nome":"will","senha":123 }​​,
        {​​ "id":Date.now(),"nome":"bob","senha":2222 }​​,
        {​​ "id":Date.now(),"nome":"ringo","senha":3333 }​​
    ]
    
    console.log(dados)

    return dados
}

function login(email,pass){

  const db = matriz()
  var encontrado = false;

  for (var i = 0; i < db.length; i++) {
    if (db[i].login == email && db[i].senha == pass) {
      encontrado = true;
      break;
    }
  }

  if (encontrado == false) {
    alert("Email ou senha inválidos")
  } else {
    window.location.href = "index.html"
    alert("Login bem-sucedido!")
  }
}

// Funções Cadastro
function cadastro(email, pass){
  var email = document.getElementById("email").value
  var senha = document.getElementById("pass").value

  var db = matriz()
  var id = db.length + 1

  db.push({id:id, login:email, senha:senha})
  console.log(db)

  alert("Cadastro realizado com sucesso!")
}

function passver(email, pass, pass1) {
  if (pass !== pass1) {
    alert("As senhas não coincidem")
  } else {
    cadastro(email, pass)
  }
}
