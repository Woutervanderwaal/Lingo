// selecting the word
var randomNumber = Math.floor(Math.random() * words.length) + 1;

var selectedWord = words[randomNumber];
var checkSelectedWord = words[randomNumber];

//give answer to overlay

document.getElementById("answerText").innerHTML = "The answer is : " + selectedWord;

// split words
var selectedWordSplit = selectedWord.split('');
var checkSelectedWordSplit = checkSelectedWord.split('');

//getelementbyid

var userInput = document.getElementById("userInput");
var saveUserInput = {};

// lists for the rows

var row = -1;
var row_0 = [];
var row_1 = [];
var row_2 = [];
var row_3 = [];
var row_4 = [];

//double for loop om de buttons op de juiste plek te krijgen en ze te maken en attributes te geven

for(i = 0; i <= 4; i++)
{
	for(j = 0; j <= 4; j++)
	{
		var maak_button = document.createElement("input");
		maak_button.setAttribute("class", "inputs");
		maak_button.setAttribute("id", "row" + i + "Column" + j);
		maak_button.setAttribute("maxlength", "1");
		maak_button.setAttribute("value", "");
		document.getElementById("game").appendChild(maak_button);
		document.getElementById("row" + i + "Column" + j).disabled = true;	
	}
    //een br om elke 5 buttons the splitten
	var maak_br = document.createElement("br");
	document.getElementById("game").appendChild(maak_br);		
}


//for loops om elke letter in zijn array te krijgen
for(i = 0; i <= 4; i++)
{
    row_0.push(document.getElementById("row0Column" + i))
}

for(i = 0; i <= 4; i++)
{
    row_1.push(document.getElementById("row1Column" + i))
}

for(i = 0; i <= 4; i++)
{
    row_2.push(document.getElementById("row2Column" + i))
}

for(i = 0; i <= 4; i++)
{
    row_3.push(document.getElementById("row3Column" + i))
}

for(i = 0; i <= 4; i++)
{
    row_4.push(document.getElementById("row4Column" + i))
}
//De eerste letter goed zetten en de juiste kleur te geven
row_0[0].value = selectedWordSplit[0];
row_0[0].style.backgroundColor = "#E12F2F";
row_0[0].style.color = "white";
//function op onlick om het antwoord te checken
function checkUserInput()
{
    var testUserInput = userInput.value;
    userInput.value = '';

    checkSelectedWordSplit = checkSelectedWord.split('');

    if(testUserInput.length == selectedWord.length)
    {

        row += 1;	
    
        var userInputSplit = testUserInput.split('')
        saveUserInput.userInput = userInputSplit;

        for(i = 0; i <= 4; i++)
        {
            var selectRow = document.getElementById("row" + row + "Column" + i);
            selectRow.value = saveUserInput.userInput[i];

            selectRow.style.backgroundColor = "#1E76B6";
            selectRow.style.color = "white";


            if(saveUserInput.userInput[i] == checkSelectedWordSplit[i])
            {
                selectRow.style.backgroundColor = "#E12F2F";
                selectRow.style.color = "white";
                saveUserInput.userInput[i] = "";
                checkSelectedWordSplit[i]='#';
            }

        } 

        if(checkSelectedWordSplit[0] == '#' && checkSelectedWordSplit[1] == '#' && checkSelectedWordSplit[2] == '#' && checkSelectedWordSplit[3] == '#' && checkSelectedWordSplit[4] == '#')
        {
            function won()
            {
                setTimeout(function(){
                   
                    document.getElementById("changeBg").style.display = "block";
                    document.getElementById("largeText").innerHTML = "You won !";

                    var btn = document.getElementById("button");
                    btn.innerHTML = "reset";
                    btn.onclick = refreshPage;   
                }, 30)
                
            }

            won();
        }

        else if(row == 4)
        {
            lost();
        }


        for(j = 0; j <= 4; j++)
        {
            var selectRow = document.getElementById("row" + row + "Column" + j);
            
            var pos = checkSelectedWordSplit.indexOf(saveUserInput.userInput[j]);
            
            if(pos !== -1)	
            {
                selectRow.style.backgroundColor = "#1E76B6";
                selectRow.style.color = "#F5DD33";
                saveUserInput.userInput[j] = "";
                checkSelectedWordSplit[pos] = '#';
            }  
        }       
    }   
    else
    {
        alert("5 caraters graag")
        userInput.value = '';
	}
}


function lost()
{

    setTimeout(function(){
        document.getElementById("changeBg").style.display = "block";
        document.getElementById("largeText").innerHTML = "Oh no you lost !";

        var btn = document.getElementById("button");
        btn.innerHTML = "reset";
        btn.onclick = refreshPage;
    }, 30)
    
}

function refreshPage()
{
    location.reload();
}

function off()
{
    document.getElementById("changeBg").style.display = "none";
}

function forceLower(strInput)
{
    strInput.value=strInput.value.toLowerCase();
}

var input = document.getElementById("userInput");
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("button").click();
  }
});