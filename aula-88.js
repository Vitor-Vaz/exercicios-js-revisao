//Exercicios - Dinamica aula 01

//1. Escreva uma função soma que retorna a soma dos números de um array usando spread operator
const array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

const soma = ((...valores) =>  valores.reduce((acc, next) => acc + next));

soma(...array)

//2. Faça fetch dos dados através da aPI (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e retorne a ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.
//Formato:
//Nome: [nome]
//ID: [id]
//Região: [area]
//Ingredientes: [ingredientes (string única)]
//Instruções: [instruções]




async function req(){
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
    const json = await res.json();
    const value = json.meals[0]



    const ficha ={
     nome: value.strMeal,
     id: value.idMeal,
     regiao: value.strArea,
     instrucoes: value.strInstructions,
     ingredirntes: `${value.strIngredient1}, ${value.strIngredient2}, ${value.strIngredient3}, ${value.strIngredient4}, ${value.strIngredient5}, ${value.strIngredient6}, ${value.strIngredient7}, ${value.strIngredient8}, ${value.strIngredient9},`
    }
    console.log(ficha)
  }
  //*Dica: Filter ou map, usando method para compara string, usando includes e replace
  req()



//3. Faça fetch dos dados através da API (https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood) e retorne uma lista(array) com os nomes dos primeiros 10 resultados.

async function list (){
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood&results=10')
    const json = await res.json();
    const meals = json.meals
    const result = meals.slice(0,10);
   //  const result2 = meals.filter(prato => prato.slice(0,10))
    console.log(result)
 }
 list()
