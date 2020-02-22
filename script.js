function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
var x = document.getElementById("search").value;
console.log(x);
/*An array containing all the country names in the world:*/
var frames = ["Surly Karate Monkey MDS","Santa Cruz Chameleon","Pivot Mach 6 Carbon 2018","DeVinci Spartan Carbon 2019","Yeti Cycles SB150 2019","Santa Cruz Bronson 2.1 2018","Ibis Ripmo AF DVO Topaz","Nukeproof Scout 290 2018","Trek X-Caliber 2019","Ibis DV9","Santa Cruz Chameleon Carbon","Pivot Mach 6 Carbon 2018","Evil Bikes The Offering 2018","Santa Cruz Highball Carbon CC","Evil Bikes The Wreckoning","Santa Cruz Hightower LT Carbon CC Performance Elite 2018","Santa Cruz Hightower LT Carbon CC","Evil Bikes The Following 2018","Santa Cruz 5010 2.1 Carbon C 2018","Ibis Ripmo","Santa Cruz Chameleon","Santa Cruz Chameleon Carbon","Devinci Django Carbon 2019","Nukeproof Scout 290 2018","Devinci Spartan Carbon 2019","Pivot Mach 5.5 Carbon 2018","Pivot Mach 4 Carbon V2 2018","Yeti Cycles Beti SB5 Turq 2017","Santa Cruz Bronson 2.1 Carbon C 2018","Ibis DV9","Ibis Ripmo AF","Santa Cruz Tallboy Carbon CC","Niner SIR 9 2018","Trek X-Caliber 2020","Niner Air 9 RDO 2018","Kona Honzo ST 2018","Surly Karate Monkey MDS","Juliana Strega Carbon C Women's","Evil Bikes The Insurgent 2018","Evil Bikes The Calling 2017","Yeti Cycles SB100 2019","Devinci Troy Carbon 2019","Trek ProCaliber AL 2020","Alchemy Arktos","Ibis Mojo 3 Carbon","Trek Stache C 2019","Pivot Mach 429 Trail Carbon 2018","Trek Roscoe 7 2018","1999 Schwinn Homegrown"];

var boostFrames = ["Surly Karate Monkey MDS","Santa Cruz Chameleon","Pivot Mach 6 Carbon 2018","DeVinci Spartan Carbon 2019","Yeti Cycles SB150 2019","Santa Cruz Bronson 2.1 2018","Ibis Ripmo AF DVO Topaz","Nukeproof Scout 290 2018","Trek X-Caliber 2019","Ibis DV9","Santa Cruz Chameleon Carbon","Pivot Mach 6 Carbon 2018","Evil Bikes The Offering 2018","Santa Cruz Highball Carbon CC","Evil Bikes The Wreckoning","Santa Cruz Hightower LT Carbon CC Performance Elite 2018","Santa Cruz Hightower LT Carbon CC","Evil Bikes The Following 2018","Santa Cruz 5010 2.1 Carbon C 2018","Ibis Ripmo","Santa Cruz Chameleon","Santa Cruz Chameleon Carbon","Devinci Django Carbon 2019","Nukeproof Scout 290 2018","Devinci Spartan Carbon 2019","Pivot Mach 5.5 Carbon 2018","Pivot Mach 4 Carbon V2 2018","Yeti Cycles Beti SB5 Turq 2017","Santa Cruz Bronson 2.1 Carbon C 2018","Ibis DV9","Ibis Ripmo AF","Santa Cruz Tallboy Carbon CC","Niner SIR 9 2018","Trek X-Caliber 2020","Niner Air 9 RDO 2018","Kona Honzo ST 2018","Surly Karate Monkey MDS","Juliana Strega Carbon C Women's","Evil Bikes The Insurgent 2018","Evil Bikes The Calling 2017","Yeti Cycles SB100 2019","Devinci Troy Carbon 2019","Trek ProCaliber AL 2020","Alchemy Arktos","Ibis Mojo 3 Carbon","Trek Stache C 2019","Pivot Mach 429 Trail Carbon 2018","Trek Roscoe 7 2018"];

let frameMap = new Map()
frameMap.set("zambia", true)
//frameMap.set(keyObj, 'value associated with keyObj')


/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), frames);