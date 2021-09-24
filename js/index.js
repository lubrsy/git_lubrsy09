function delA(){
	var oTr = this.parentNode.parentNode;
	var oName = oTr.getElementsByTagName("td")[0].innerHTML;
	var flag = confirm("确认删除" + oName + "吗？")
	if(flag){
		oTr.parentNode.removeChild(oTr);
	}
	return false;
}
window.onload = function(){
	var allA = document.getElementsByTagName("a");
	var oAddEmpButton = document.getElementById("addEmpButton");
	for(var i = 0; i < allA.length; i++){
		allA[i].onclick = delA;
	}
	oAddEmpButton.onclick = function(){
		var name = document.getElementById("empName").value;
		var email = document.getElementById("email").value;
		var salary = document.getElementById("salary").value;
		var tr = document.createElement("tr");
		tr.innerHTML = "<td>" + name + "</td>" + 
						"<td>" + email + "</td>" + 
						"<td>" + salary + "</td>" + 
						"<td><a href='javascript:;'>Delete</a></td>";
		var a = tr.getElementsByTagName("a")[0];
		a.onclick = delA;
		var employeeTable = document.getElementById("employeeTable");
		var tbody = document.getElementsByTagName("tbody")[0];
		tbody.appendChild(tr);
	};
};