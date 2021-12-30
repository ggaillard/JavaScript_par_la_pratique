let assert = require('assert');
let mod = require('./variables01.js');

it("Création des variables : num, txt, tmp et flt", function () {
  try
  {
    assert.equal( 42, mod.num );
    assert.equal( typeof(mod.num), "number" );
    assert.equal( "42", mod.txt );
    assert.equal( typeof(mod.txt), "string" );
    assert.equal( true, mod.tmp );
    assert.equal( typeof(mod.tmp), "boolean" );
    assert.equal( 42.42, mod.flt );
    assert.equal( typeof(mod.flt), "number" );
  }
  catch (error)
  {
    printMessage('Conseil 💡', "Revoyez la déclaration des variables 🤔");
    throw error;
  }
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}


//Solution
// let num=42;
//let txt=42;
//let tmp=true;
//let flt=42.42;
