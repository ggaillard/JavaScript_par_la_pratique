var assert = require('assert');
var mod = require('./variables02.js');

it("Opération sur les variables : num, txt, et temp", function () {
  try
  {
    assert.equal( 42, mod.num );
    assert.equal( "13", mod.txt );
    assert.equal( 0, mod.temp );
  }
  catch (error)
  {
    printMessage('Conseil 💡', "Revoyez les opérateurs 🤔");
    throw error;
  }
});

function printMessage(channel, message)
{
console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

// solution
// var num=42;
// var txt="13";
//temp=0;
