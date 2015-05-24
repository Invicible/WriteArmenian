//Created by Aram Sheroyan



//If DOM is ready

domReady(function () {
    var input = document.getElementById("writing"); // Get textarea
    var orgtxt = input.value; //Get texarea source value
    
    
    
 /*---------Get onKeyDown option------------- */   
    var events;
    input.onkeydown = function(event){
	events = event || window.event;
	
	};
  /*---------If textarea has changed------------- */   
  
    input.oninput = function () {
        
        if(events.keyCode !== 8 && events.keyCode !== 46  ) //If not pressed "Backspace" or "Delete"
        { 

        var chngtxt = input.value;
        var first,end,changed;
        
        
        if(events.keyCode === 13) //If pressed "Enter"
        { 
            
            input.value = orgtxt + "\n"; 
            orgtxt = input.value;
            
            
        }
        
        
        else if(events.keyCode === 32) //If pressed "Space"
        {  
            for (i = 0; i <= chngtxt.length; i++) { 
            if (chngtxt.charCodeAt(i) !== orgtxt.charCodeAt(i)) 
            {
                
                first = chngtxt.slice(0, i);
                end = chngtxt.slice(i + 1, chngtxt.length);
                changed = " ";
                
                input.value = first + changed + end;
                
                var lngt = first + changed; // Get changed text length for changing cursor position
                setCaretToPos(document.getElementById("writing"), lngt.length);
                
                
                orgtxt = input.value; //Set changed text as a original
                break;

            }
        }
            
            
            
            
            
        }
else{
        for (i = 0; i <= chngtxt.length; i++) // Loop for finding symbols
        { 
            if (chngtxt.charCodeAt(i) !== orgtxt.charCodeAt(i)) // If original text symbols isn'n equal
            {
                
                
                end = chngtxt.slice(i + 1, chngtxt.length);
                changed = chngtxt.slice(i, i + 1);
                
                if(changed.charCodeAt(0) >= 33  && changed.charCodeAt(0) <= 126 ) // If keyboard is English
                {
                    
                if(orgtxt.slice(i-1,i) === "ց"  && changed.charCodeAt(0) === 104) // If has been typed "ch", change to "չ"
                {
                    
                    first = chngtxt.slice(0, i-1);                    
                    var res = "չ";                                       
                }
                
                else if(orgtxt.slice(i-1,i) === "Ց"  && changed.charCodeAt(0) === 104) // If has been typed "Ch", change to "Չ" 
                {
                    
                    first = chngtxt.slice(0, i-1);                   
                    var res = "Չ";                                       
                }
                else if(orgtxt.slice(i-1,i) === "ս"  && changed.charCodeAt(0) === 104) // If has been typed "sh", change to "շ"
                {
                    
                    first = chngtxt.slice(0, i-1);                   
                    var res = "շ";                                       
                }
                else if(orgtxt.slice(i-1,i) === "Ս"  && changed.charCodeAt(0) === 104) // If has been typed "Sh", change to "Շ"
                {
                    
                    first = chngtxt.slice(0, i-1);                   
                    var res = "Շ";                                       
                }
                
                else
                {
                    first = chngtxt.slice(0, i);
                    var res = changed.replace(changed, changeText(changed)); //Replace symbols
                }
                
                
                
                
                     
                input.value = first + res + end;
                
                var lngt = first + res; // Get changed text length for changing cursor position
                
                setCaretToPos(document.getElementById("writing"), lngt.length); //Change cursor position
                
                
                orgtxt = input.value;
                break;
               }
           

            }
        }
    }
        }
    };
    
});

 /*---------Changing symbols------------- */   


function changeText(text) {
    var a;
    var codechar = text.charCodeAt(0);
    switch (codechar) {
        case 33:a = "Է";break;
        case 34:a = "շ";break;
        case 35:a = "Փ";break;
        case 36:a = "Ձ";break;
        case 37:a = "Ջ";break;
        case 38:a = "և";break;
        case 39:a = "՛";break;
        case 40:a = "Չ";break;
        case 41:a = "Ճ";break;
        case 42:a = "Ր";break;
        case 43:a = "Ժ";break;
        case 44:a = ",";break;
        case 45:a = "-";break;
        case 46:a = ".";break;
        case 47:a = "/";break;
        case 48:a = "ճ";break;
        case 49:a = "է";break;
        case 50:a = "թ";break;
        case 51:a = "փ";break;
        case 52:a = "ձ";break;
        case 53:a = "ջ";break;
        case 54:a = "ւ";break;
        case 55:a = "և";break;
        case 56:a = "ր";break;
        case 57:a = "չ";break;
        case 58:a = ":";break;
        case 59:a = ";";break;
        case 60:a = "<";break;
        case 61:a = "ժ";break;
        case 62:a = ">";break;
        case 63:a = "?";break;
        case 64:a = "Թ";break;
        case 65:a = "Ա";break;
        case 66:a = "Բ";break;
        case 67:a = "Ց";break;
        case 68:a = "Դ";break;
        case 69:a = "Ե";break;
        case 70:a = "Ֆ";break;
        case 71:a = "Գ";break;
        case 72:a = "Հ";break;
        case 73:a = "Ի";break;
        case 74:a = "Յ";break;
        case 75:a = "Կ";break;
        case 76:a = "Լ";break;
        case 77:a = "Մ";break;
        case 78:a = "Ն";break;
        case 79:a = "Օ";break;
        case 80:a = "Պ";break;
        case 81:a = "Ք";break;
        case 82:a = "Ռ";break;
        case 83:a = "Ս";break;
        case 84:a = "Տ";break;
        case 85:a = "Ւ";break;
        case 86:a = "Վ";break;
        case 87:a = "Ո";break;
        case 88:a = "Ղ";break;
        case 89:a = "Ո";break;
        case 90:a = "Զ";break;
        case 91:a = "խ";break;
        case 92:a = "շ";break;
        case 93:a = "ծ";break;
        case 94:a = "ւ";break;
        case 95:a = "_";break;
        case 96:a = "՝";break;                                                                                          
        case 97:a = "ա";break;            
        case 98:a = "բ";break;
        case 99:a = "ց";break;    
        case 100:a = "դ";break;  
        case 101:a = "ե";break;
        case 102:a = "ֆ";break;
        case 103:a = "գ";break;
        case 104:a = "հ";break;
        case 105:a = "ի";break;
        case 106:a = "յ";break;
        case 107:a = "կ";break;
        case 108:a = "լ";break;
        case 109:a = "մ";break;
        case 110:a = "ն";break;
        case 111:a = "օ";break;    
        case 112:a = "պ";break;
        case 113:a = "ք";break;    
        case 114:a = "ռ";break;    
        case 115:a = "ս";break;    
        case 116:a = "տ";break;    
        case 117:a = "ւ";break;    
        case 118:a = "վ";break;    
        case 119:a = "ո";break;    
        case 120:a = "ղ";break;    
        case 121:a = "ը";break;    
        case 122:a = "զ";break;    
        case 123:a = "Խ";break;    
        case 124:a = "Շ";break;
        case 125:a = "Ծ";break;
        case 126:a = "՜";break;
    }

    return a;
}


 /*---------Cursor position------------- */   


function setSelectionRange(input, selectionStart, selectionEnd) {
    if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
    } else if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
    }
}
function setCaretToPos(input, pos) {
    setSelectionRange(input, pos, pos);
}
