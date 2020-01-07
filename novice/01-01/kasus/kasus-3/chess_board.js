var ukuran = 8;
var papan = '';

for(var y = 0; y < papan; y++)
{
	for(var x = 0; x < papan; x++)
    {
      if ((x + y) % 2 == 0)
      papan +=" ";
      else
      papan +="#";
    }
  board += "\n";
}
console.log(papan);