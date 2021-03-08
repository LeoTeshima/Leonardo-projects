
        // referenciando todos os elementos do meu html
        var listElement = document.querySelector("#app ul")
        var inputElement = document.querySelector("#app input")
        var buttonElement = document.querySelector("#app button")

        //json.parse para transformar em array. Preciso retornar um array vazio, como valor padrao, dentro da variavel todos.
        var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

        // funçao para criar os elementos e mostrar na tela
        function render() {

            //ps: isso acontece porque quando se cria um novo conteudo pelo input,
            // ele renderiza todos os outros elementos de novo, fica duplicado
            //tudo que tiver dentro da ul, vai remover tudo
            listElement.innerHTML = "";

            //for que cria uma variavel (todo) passando por todos os itens do array (todos)
            for (todo of todos) {
                //cria a variavel e cria um elemento (li)
                var todoElement = document.createElement("li");
                // cria uma variavel e usa uma funçao que cria um texto, que no caso é os itens do array
                var todoText = document.createTextNode(todo);

                var linkElement = document.createElement("a");
                var linkText = document.createTextNode(" Excluir");

                //cria um atributo na variavel linkElement, e usa # para clicar e nao redirecionar a alguns link
                linkElement.setAttribute("href", '#')
                linkElement.appendChild(linkText);

                //procura no array de todo, o  indice desse todo. O indexOf retorna qual a posiçao desse item no array.
                var pos = todos.indexOf(todo);
                //concatenaçao para passar um parametro para a funçao deleteToDo.
                linkElement.setAttribute("onclick", 'deleteToDo(' + pos + ')');



                //a variavel todoElement vira pai do todoText
                todoElement.appendChild(todoText);
                todoElement.appendChild(linkElement);

                // adiciona a variavel todoElement, que ja tem o todoText como filho, na listElement    
                listElement.appendChild(todoElement);
            }
        }
        render();

        function addToDo() {
            //vou ter o valor do input
            var todoText = inputElement.value;

            //funçao do array para adicionar um conteudo no final do array
            todos.push(todoText);
            //apago o texto atual do input
            inputElement.value = "";
            render();
            saveToStorage()
        }

        //chamo a funçao no click do botao
        buttonElement.onclick = addToDo;

        //funçao que recebe o param pos
        function deleteToDo(pos) {
            //splice é um metodo que remove uma quantidade de itens do array baseado na posiçao que passar, entao é na pos e remove um item.
            todos.splice(pos, 1);
            render();
            saveToStorage()
        }

        function saveToStorage() {
            //armazena os todos, as informaçoes, para salvar no armazenamento local. Posso fechar e recarregar a pagina.
            localStorage.setItem('list_todos', JSON.stringify(todos));
            //posso colocar qualquer nome para esse localstorage. Salvo na estrutura JSON, para transformar o vetor em um string.
        }