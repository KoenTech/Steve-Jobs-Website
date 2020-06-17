//   ############################################################
//   #                                                          #
//   #             Copyright © 2020 - Koen Caspers              #
//   #                                                          #
//   ############################################################
 
 
 'use strict';
  var config = {
    XXXXXXXXXXXX
  };
  // Initialize Firebase
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('postForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();
   var structuur = getRadioVal(document.getElementById('postForm'), "structuur");
   var links = getRadioVal(document.getElementById('postForm'), "links");
   var Homepage = getRadioVal(document.getElementById('postForm'), "Homepage");
   var Gegevenspage = getRadioVal(document.getElementById('postForm'), "Gegevenspage");
   var fotos = getRadioVal(document.getElementById('postForm'), "fotos");
   var divs = getRadioVal(document.getElementById('postForm'), "divs");
   var pictures = getRadioVal(document.getElementById('postForm'), "pictures");
   var CSSlinked = getRadioVal(document.getElementById('postForm'), "CSSlinked");
   var CSSstyle = getRadioVal(document.getElementById('postForm'), "CSSstyle");
   var design = getRadioVal(document.getElementById('postForm'), "design");
   var total = parseInt(structuur) + parseInt(links) + parseInt(Homepage) + parseInt(Gegevenspage) + parseInt(fotos) + parseInt(divs) + parseInt(pictures) + parseInt(CSSlinked) + parseInt(CSSstyle) + parseInt(design);
  var cijfer = (total / 50) * 10;
  console.log(cijfer);
  // Get values
  console.log(structuur + links + Homepage + Gegevenspage + fotos + divs + pictures + CSSlinked + CSSstyle + design)
  // Save message
  saveMessage(structuur, links, Homepage, Gegevenspage, fotos, divs, pictures, CSSlinked, CSSstyle, design, total, cijfer);

  document.getElementById('confirmed1').innerHTML = total + "/50 = " + cijfer;
  document.getElementById('uploaded1').innerHTML = "Score has been uploaded to database!";
}

// Save message to firebase
function saveMessage(structuur, links, Homepage, Gegevenspage, fotos, divs, pictures, CSSlinked, CSSstyle, design, total, cijfer){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    structuur: structuur,
    links: links,
    Homepage: Homepage,
    Gegevenspage: Gegevenspage,
    fotos: fotos,
    divs: divs,
    pictures: pictures,
    CSSlinked: CSSlinked,
    CSSstyle: CSSstyle,
    design: design,
    total: total,
    cijfer: cijfer
  });
}
function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];
    
    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val; // return value of checked radio or undefined if none checked
}
