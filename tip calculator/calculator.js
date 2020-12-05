function CalcTip()
{
	var tip=parseInt(document.getElementById("tip").value);
	var amount=parseInt(document.getElementById("amt").value);
	var equal=(amount*tip)/100;
	document.write("The tip amount is ")
	document.write(equal);
	document.write(" Reload the page for next calculation")
}


