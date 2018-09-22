
function calculateInsurance () {
	var name = document.getElementById("name").elements.namedItem("name1").value;
	/*if (name.length < 1){
		alert("Add value!-->Name:")
		return;
	}
	var name1 =""
	for (i = 0; i < name.length; i++) {
		if(isNaN(name[i])){
			name1 += name[i];
		}else{
			alert("Invalid value-->Name: "+name+"\nDo not use space!\nUse only letters!");
			return;
		}}*/
	var years = document.getElementById("age").elements.namedItem("age1").value;
	if(years.length < 1){
		alert("Add value!-->Age:")
		return;
	}
	var years1 = 0;
	if (!isNaN(years)){
		years1 = Number(years);
	}else{
		alert("Invalid value-->Age: "+years+"\nUse only numbers!");
		return;
	}
		
	var horse_power = document.getElementById("hp").elements.namedItem("hp1").value;
	if(horse_power.length < 1){
		alert("Add value!--> Horsepower of your car:")
		return;
	}
	var horse_power1 = 0;
	if (!isNaN(horse_power)){
		horse_power1 = Number(horse_power);
	}else{
		alert("Invalid value-->Horsepower of your car: "+horse_power+"\nUse only numbers!");
		return ;
	}
	
	var country = document.getElementById("country");
	var country1 = country.options[country.selectedIndex].text;
	if (country1 == "Austria"){
		var insurance = horse_power1 * 100 / years1 + 50;
		var result = Math.floor(insurance)
		document.getElementById("resultbox").innerHTML = "<p>Dear "+name+" , in " +country1+" , your insurance will be: "+result+"USD.</p>";
	}else if (country1 =="Greece") {
		var insurance = horse_power1 * 150 / (years1 + 3) + 150;
		var result = Math.floor(insurance)
		document.getElementById("resultbox").innerHTML = "<p>Dear "+name+" , in " +country1+" , your insurance will be: "+result+"USD.</p>";
	}else if (country1 == "Hungary") {
		var insurance = horse_power1 * 120 / years1 + 100;
		var result = Math.floor(insurance)
		document.getElementById("resultbox").innerHTML = "<p>Dear "+name+" , in " +country1+" , your insurance will be: "+result+"USD.</p>";
	}else {
		alert("Invalid value!")
	}
	




	
}