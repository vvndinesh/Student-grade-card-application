function student1()
{
	phy1=Number(document.getElementById("phy1").value);
	mat1=Number(document.getElementById("mat1").value);
	che1=Number(document.getElementById("che1").value);

	//Total Calc
	if (phy1<=100 && mat1<=100 && che1<=100)
	{
		total1=phy1+mat1+che1;
		document.getElementById("total1").value=total1;
	}
	else
		document.getElementById("total1").value=total1="Enter marks < 100";

	//Percenage Calc
	percent1=(total1/300)*100;
	document.getElementById("percent1").value=percent1;

	//Grade Calc
	percent1= Number(document.getElementById("percent1").value);
	if (percent1>=90)
	{
		document.getElementById("grade1").value=grade1="O";
	}
	else if (percent1>=80)
	{
		document.getElementById("grade1").value=grade1="A+";
	}
	else if (percent1>=70)
	{
		document.getElementById("grade1").value=grade1="A";
	}
	else if (percent1>=60)
	{
		document.getElementById("grade1").value=grade1="B+";
	}
	else if (percent1>=50)
	{
		document.getElementById("grade1").value=grade1="B";
	}
	else if (percent1>=45)
	{
		document.getElementById("grade1").value=grade1="C";
	}
	else{
		document.getElementById("grade1").value=grade1="F";
	}
}


function student2()
{
	phy2=Number(document.getElementById("phy2").value);
	mat2=Number(document.getElementById("mat2").value);
	che2=Number(document.getElementById("che2").value);

	//Total Calc
	if (phy2<=100 && mat2<=100 && che2<=100)
	{
		total2=phy2+mat2+che2;
		document.getElementById("total2").value=total2;
	}
	else
		document.getElementById("total2").value=total2="Enter marks < 100";

	//Percentage Calc
	total2= Number(document.getElementById("total2").value);
	percent2=(total2/300)*100;
	document.getElementById("percent2").value=percent2;

	//Grade calc
	percent2= Number(document.getElementById("percent2").value);
	if (percent2>=90)
	{
		document.getElementById("grade2").value=grade2="O";
	}
	else if (percent2>=80)
	{
		document.getElementById("grade2").value=grade2="A+";
	}
	else if (percent2>=70)
	{
		document.getElementById("grade2").value=grade2="A";
	}
	else if (percent2>=60)
	{
		document.getElementById("grade2").value=grade2="B+";
	}
	else if (percent2>=50)
	{
		document.getElementById("grade2").value=grade2="B";
	}
	else if (percent2>=45)
	{
		document.getElementById("grade2").value=grade2="C";
	}
	else{
		document.getElementById("grade2").value=grade2="F";
	}
}


function student3()
{
	phy3=Number(document.getElementById("phy3").value);
	mat3=Number(document.getElementById("mat3").value);
	che3=Number(document.getElementById("che3").value);

	//Total Calc
	if (phy3<=100 && mat3<=100 && che3<=100)
	{
		total3=phy3+mat3+che3;
		document.getElementById("total3").value=total3;
	}
	else
		document.getElementById("total3").value=total3="Enter marks < 100";

	//Percentage Calc
	total3= Number(document.getElementById("total3").value);
	percent3=(total3/300)*100;
	document.getElementById("percent3").value=percent3;

	//Grade Calc
	percent3= Number(document.getElementById("percent3").value);
	if (percent3>=90)
	{
		document.getElementById("grade3").value=grade3="O";
	}
	else if (percent3>=80)
	{
		document.getElementById("grade3").value=grade3="A+";
	}
	else if (percent3>=70)
	{
		document.getElementById("grade3").value=grade3="A";
	}
	else if (percent3>=60)
	{
		document.getElementById("grade3").value=grade3="B+";
	}
	else if (percent3>=50)
	{
		document.getElementById("grade3").value=grade3="B";
	}
	else if (percent3>=45)
	{
		document.getElementById("grade3").value=grade3="C";
	}
	else{
		document.getElementById("grade3").value=grade3="F";
	}
}


function student4()
{
	phy4=Number(document.getElementById("phy4").value);
	mat4=Number(document.getElementById("mat4").value);
	che4=Number(document.getElementById("che4").value);

	//Total Calc
	if (phy4<=100 && mat4<=100 && che4<=100)
	{
		total4=phy4+mat4+che4;
		document.getElementById("total4").value=total4;
	}
	else
		document.getElementById("total4").value=total4="Enter marks < 100";

	//Percent Calc
	total4= Number(document.getElementById("total4").value);
	percent4=(total4/300)*100;
	document.getElementById("percent4").value=percent4;

	//Grade Calc
	percent4= Number(document.getElementById("percent4").value);
	if (percent4>=90)
	{
		document.getElementById("grade4").value=grade4="O";
	}
	else if (percent4>=80)
	{
		document.getElementById("grade4").value=grade4="A+";
	}
	else if (percent4>=70)
	{
		document.getElementById("grade4").value=grade4="A";
	}
	else if (percent4>=60)
	{
		document.getElementById("grade4").value=grade4="B+";
	}
	else if (percent4>=50)
	{
		document.getElementById("grade4").value=grade4="B";
	}
	else if (percent4>=45)
	{
		document.getElementById("grade4").value=grade4="C";
	}
	else{
		document.getElementById("grade4").value=grade4="F";
	}
}


function student5()
{
	phy5=Number(document.getElementById("phy5").value);
	mat5=Number(document.getElementById("mat5").value);
	che5=Number(document.getElementById("che5").value);

	//Total Calc
	if (phy5<=100 && mat5<=100 && che5<=100)
	{
		total5=phy5+mat5+che5;
		document.getElementById("total5").value=total5;
	}
	else
		document.getElementById("total5").value=total5="Enter marks < 100";

	//Percentage Calc
	total5= Number(document.getElementById("total5").value);
	percent5=(total5/300)*100;
	document.getElementById("percent5").value=percent5;

	//Grade Calc
	percent5= Number(document.getElementById("percent5").value);
	if (percent5>=90)
	{
		document.getElementById("grade5").value=grade5="O";
	}
	else if (percent5>=80)
	{
		document.getElementById("grade5").value=grade5="A+";
	}
	else if (percent5>=70)
	{
		document.getElementById("grade5").value=grade5="A";
	}
	else if (percent5>=60)
	{
		document.getElementById("grade5").value=grade5="B+";
	}
	else if (percent5>=50)
	{
		document.getElementById("grade5").value=grade5="B";
	}
	else if (percent5>=45)
	{
		document.getElementById("grade5").value=grade5="C";
	}
	else{
		document.getElementById("grade5").value=grade5="F";
	}
}


function phy_highest()
{
	if(phy1> phy2 && phy1>phy3 && phy1>phy4 && phy1>phy5){
		document.getElementById("phyhighest").value=phyhighest="Student1"
	}
	else if(phy2>phy3 && phy2>phy4 && phy2>phy5){
		document.getElementById("phyhighest").value=phyhighest="Student2"
	}
	else if(phy3>phy4 && phy3>phy5){
		document.getElementById("phyhighest").value=phyhighest="Student3"
	}
	else if(phy4>phy5){
		document.getElementById("phyhighest").value=phyhighest="Student4"
	}
	else
		document.getElementById("phyhighest").value=phyhighest="Student5"
}

function mat_highest()
{
	if(mat1> mat2 && mat1>mat3 && mat1>mat4 && mat1>mat5){
		document.getElementById("mathighest").value=mathighest="Student1"
	}
	else if(mat2>mat3 && mat2>mat4 && mat2>mat5){
		document.getElementById("mathighest").value=mathighest="Student2"
	}
	else if(mat3>mat4 && mat3>mat5){
		document.getElementById("mathighest").value=mathighest="Student3"
	}
	else if(mat4>mat5){
		document.getElementById("mathighest").value=mathighest="Student4"
	}
	else
		document.getElementById("mathighest").value=mathighest="Student5"
}

function che_highest()
{
	if(che1> che2 && che1>che3 && che1>che4 && che1>che5){
		document.getElementById("chehighest").value=chehighest="Student1"
	}
	else if(che2>che3 && che2>che4 && che2>che5){
		document.getElementById("chehighest").value=chehighest="Student2"
	}
	else if(che3>che4 && che3>che5){
		document.getElementById("chehighest").value=chehighest="Student3"
	}
	else if(che4>che5){
		document.getElementById("chehighest").value=chehighest="Student4"
	}
	else
		document.getElementById("chehighest").value=chehighest="Student5"
}

function max()
{
	if(total1> total2 && total1>total3 && total1>total4 && total1>total5){
		document.getElementById("totalmarks").value=totalmarks="Student1"
	}
	else if(total2>total3 && total2>total4 && total2>total5 ){
		document.getElementById("totalmarks").value=totalmarks="Student2"
	}
	else if(total3>total4 && total3>total5 ){
		document.getElementById("totalmarks").value=totalmarks="Student3"
	}
	else if(total4>total5 ){
		document.getElementById("totalmarks").value=totalmarks="Student4"
	}
	else
		document.getElementById("totalmarks").value=totalmarks="Student5"
}
