window.addEventListener('load', function(e) {
	console.log('document loaded');
	getActivities();
});

newActivityForm.submit.addEventListener('click', function(e){
	postActivities(activity);
})
function getActivities(){
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "/api/activities");
	var activityArr = [];
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			activityArr = JSON.parse(xhr.responseText);
			console.log(xhr.responseText);
			showActivities(activityArr);
		}else{
			console.log(xhr.readyState + " " + xhr.status);
		}
		if (xhr.readState === 4 && xhr.status >= 400){
			console.log(xhr.readyState + " " + xhr.status)
		}
	};
	xhr.send(null);
	
	showActivities(activityArr);
}

function showActivities(activityArr){
	console.log(typeof activityArr);
	let dataDiv = document.getElementById('activityData');
	dataDiv.textContent = '';
	
	let table = document.createElement('table');
	document.body.appendChild(table);

	let thead = document.createElement('thead');
	table.appendChild(thead);

	let tr = document.createElement('tr');
	thead.appendChild(tr);
	
	let thdate = document.createElement('th');
	tr.appendChild(thdate);
	thdate.textContent = 'Date';
	
	let th = document.createElement('th');
	tr.appendChild(th);
	th.textContent = 'Activity Name';

	let th2 = document.createElement('th');
	tr.appendChild(th2);
	th2.textContent = 'Areas Worked';
	
	let th3 = document.createElement('th');
	tr.appendChild(th3);
	th3.textContent = 'Sets';
	
	let th4 = document.createElement('th');
	tr.appendChild(th4);
	th4.textContent = 'Reps';
	
	let tbody = document.createElement('tbody');
	table.appendChild(tbody);
	
	activityArr.forEach(function(val, idx, arr){
		let trMain = document.createElement('tr');
		  tbody.appendChild(trMain);
		let tddate = document.createElement('td');
		  tddate.textContent = val.date;
		  trMain.appendChild(tddate);
		  
		let tdActivityName = document.createElement('td');
		  tdActivityName.textContent = val.activityName;
		  trMain.appendChild(tdActivityName);
		  
		let tdbodyPart = document.createElement('td');
		  tdbodyPart.textContent = val.bodyPart;
		  trMain.appendChild(tdbodyPart);
		  
		let tdSets = document.createElement('td');
		  tdSets.textContent = val.sets;
		  trMain.appendChild(tdSets);
		  
		let tdReps = document.createElement('td');
		  tdReps.textContent = val.reps;
		  trMain.appendChild(tdReps);
		  

	});
	dataDiv.appendChild(table);
}

function postActivities(activity){
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "/api/activities");
	var newActivity = '';
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			newActivity = JSON.parse(xhr.responseText);
			console.log(xhr.responseText);
			showActivities(activityArr.push(newActivity));
		}else{
			console.log(xhr.readyState + " " + xhr.status);
		}
		if (xhr.readState === 4 && xhr.status >= 400){
			console.log(xhr.readyState + " " + xhr.status)
		}
	};
	xhr.send(null);
	
}